<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
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
  console.log('🦕 msg', key, ev)
}
</script>

<template>
  <div class="w-full h-[118px] mx-auto flex items-start space-x-[16px] justify-between">
    <MunchkinCalculatorPanelInputNumber
      :model-value="level"
      :placeholder="t('level')"
      @change="handleChange('level', $event)"
    />
    <div class="flex-1 w-full flex flex-col space-y-[8px]">
      <MunchkinCalculatorPanelSexButtons
      />
      <MunchkinCalculatorPanelSelect
        :model-value="class"
        :placeholder="t('class')"
         @change="handleChange('class', $event)"
      />
      <MunchkinCalculatorPanelSelect
        :model-value="race"
        :placeholder="t('race')"
        :style="{
          fontSize: '12px',
          minHeight: '32px',
        }"
        @change="handleChange('race', $event)"
      />
    </div>
    <MunchkinCalculatorPanelInputNumber
      :model-value="gear"
      :placeholder="t('gear')"
      @change="handleChange('gear', $event)"
    />
  </div>
</template>
