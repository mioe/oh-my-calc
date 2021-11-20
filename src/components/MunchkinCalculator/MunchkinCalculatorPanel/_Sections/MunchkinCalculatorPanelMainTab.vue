<script setup lang="ts">
import { computed } from 'vue'
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

defineProps({
  level: {
    type: Number,
    default: 1,
  },
  sex: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: null,
  },
  race: {
    type: String,
    default: null,
  },
  gear: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits<{
  (e: 'update:level', value: number): void,
  (e: 'update:sex', value: boolean): void,
  (e: 'update:class', value: string): void,
  (e: 'update:race', value: string): void,
  (e: 'update:gear', value: number): void,
}>()

const handleChange = (key: string, ev: any) => {
  // @ts-ignore
  emit(`update:${key}`, ev)
}
</script>

<template>
  <div class="w-full h-[118px] mx-auto flex items-start space-x-[16px] justify-between">
    <MunchkinCalculatorPanelInputNumber
      :model-value="level"
      :placeholder="t('level')"
      :min="1"
      :max="10"
      @change="handleChange('level', $event)"
    />
    <div class="flex-1 w-full flex flex-col space-y-[8px]">
      <MunchkinCalculatorPanelSexButtons
        :model-value="sex"
        @change="handleChange('sex', $event)"
      />
      <MunchkinCalculatorPanelSelect
        :model-value="class"
        :placeholder="t('class')"
        :options="classes"
        @change="handleChange('class', $event)"
      />
      <MunchkinCalculatorPanelSelect
        :model-value="race"
        :placeholder="t('race')"
        :style="{
          fontSize: '12px',
          minHeight: '32px',
        }"
        :options="races"
        @change="handleChange('race', $event)"
      />
    </div>
    <MunchkinCalculatorPanelInputNumber
      :model-value="gear"
      :placeholder="t('gear')"
      :min="0"
      :max="99"
      @change="handleChange('gear', $event)"
    />
  </div>
</template>
