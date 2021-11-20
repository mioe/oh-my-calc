<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  secondClass: {
    type: String,
    default: null,
  },
  secondRace: {
    type: String,
    default: 'human',
  },
  classes: {
    type: Array,
    default: () => ([]),
  },
  races: {
    type: Array,
    default: () => ([]),
  }
})

const emit = defineEmits<{
  (e: 'update:secondClass', value: string): void,
  (e: 'update:secondRace', value: string): void,
}>()

const handleChange = (key: string, ev: any) => {
  // @ts-ignore
  emit(`update:${key}`, ev)
}
</script>

<template>
  <div class="w-full mx-auto">
    <div class="grid grid-cols-[50px,1fr] gap-x-[16px] gap-y-[8px]">
      <label class="custom-checkbox justify-center bg-$secondary rounded-[4px]">
        <input type="checkbox">
      </label>
      <MunchkinCalculatorPanelSelect
        :model-value="secondClass"
        :placeholder="t('class')"
        align="left"
        :options="classes"
        @change="handleChange('secondClass', $event)"
      />
      <label class="custom-checkbox justify-center bg-$secondary rounded-[4px]">
        <input type="checkbox">
      </label>
      <MunchkinCalculatorPanelSelect
        :model-value="secondRace"
        :placeholder="t('race')"
        align="left"
        :options="races"
        @change="handleChange('secondRace', $event)"
      />
    </div>
  </div>
</template>
