<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
import { useWindowSize } from '@vueuse/core'

const store = useMunchkinCalculatorOfflineStore()
const { munchkinRaces, munchkinClasses } = store

const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)
const isTableVer: ComputedRef<boolean> = computed(() => width.value >= 768)

defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
  (e: 'handle-edit'): void,
  (e: 'handle-remove'): void,
}>()

const handlePanel = (key: 'edit' | 'remove') => {
  console.log('🦕 handlePanel', key)
  // @ts-ignore
  emit(`handle-${key}`)
}

const isOpenAdditionalTab: Ref<boolean> = ref(false)
const isShowAdditionalTab: ComputedRef<boolean> = computed(() =>
  isOpenAdditionalTab.value || isTableVer.value
)
const toggleAdditionalTab = () => {
  isOpenAdditionalTab.value = !isOpenAdditionalTab.value
}

const toggleHide = () => {
  emit('update:modelValue', null)
}
</script>

<template>
  <section
    v-if="modelValue"
    :class="[
      'munchkin-calculator-panel fixed z-1 w-full left-0',
      'bg-$document w-full py-[8px] border-t-3 border-$primary',
      isPortrait ? 'bottom-0': 'bottom-[48px]',
    ]"
  >
    <div class="max-w-[1200px] mx-auto px-[16px] space-y-[16px]">
      <MunchkinCalculatorPanelHeader
        :name="modelValue.name"
        :is-open-additional-tab="isOpenAdditionalTab"
        @handle-hide="toggleHide"
        @handle-additional="toggleAdditionalTab"
        @handle-edit="handlePanel('edit')"
        @handle-remove="handlePanel('remove')"
      />
      <div class="grid md:grid-cols-2 md:gap-x-[16px]">
        <MunchkinCalculatorPanelMainTab
          v-if="!isOpenAdditionalTab || isTableVer"
        />
        <MunchkinCalculatorPanelAdditionalTab
          v-if="isShowAdditionalTab"
        />
      </div>
    </div>
  </section>
</template>
