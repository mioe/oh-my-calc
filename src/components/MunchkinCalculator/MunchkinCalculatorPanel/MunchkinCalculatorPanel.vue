<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
import { useI18n } from 'vue-i18n'

const store = useMunchkinCalculatorOfflineStore()
const { munchkinRaces, munchkinClasses } = store

const { t } = useI18n()

const races = computed(() => munchkinRaces
  .map((race: string) => ({ text: t(race), value: race }))
)
const classes = computed(() => {
  return [
    { text: t('withoutClass'), value: '' },
    ...munchkinClasses.map((cls: string) => ({ text: t(cls), value: cls })),
  ]
})

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
  // console.log('🦕 handlePanel', key)
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
      <div class="grid md:grid-cols-2 md:gap-x-[16px] min-h-[118px]">
        <MunchkinCalculatorPanelMainTab
          v-if="!isOpenAdditionalTab || isTableVer"
          v-model:sex="modelValue.currentSex"
          v-model:level="modelValue.level"
          v-model:gear="modelValue.gear"
          v-model:class="modelValue.class"
          v-model:race="modelValue.race"
          :classes="classes"
          :races="races"
        />
        <MunchkinCalculatorPanelAdditionalTab
          v-if="isShowAdditionalTab"
          :classes="classes"
          :races="races"
        />
      </div>
    </div>
  </section>
</template>
