<script setup lang="ts">
import { ref, Ref, computed, ComputedRef, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
import { useWindowSize } from '@vueuse/core'

const store = useMunchkinCalculatorOfflineStore()
const { munchkinRaces, munchkinClasses } = store

const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)
const isTableVer: ComputedRef<boolean> = computed(() => width.value >= 768)

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
}>()

onMounted(() => {
  console.log('🦕 munchkinRaces', munchkinRaces)
  console.log('🦕 munchkinClasses', munchkinClasses)
})
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
      />
      MunchkinCalculatorPanel
      {{ modelValue }}
    </div>
  </section>
</template>
