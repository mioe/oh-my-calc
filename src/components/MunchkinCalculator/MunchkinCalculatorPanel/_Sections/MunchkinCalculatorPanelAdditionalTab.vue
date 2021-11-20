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
    <div class="grid gap-y-[8px]">
      <MunchkinCalculatorPanelSelect
        :model-value="secondClass"
        :placeholder="t('class')"
        :options="classes"
        @change="handleChange('secondClass', $event)"
      />
      <MunchkinCalculatorPanelSelect
        :model-value="secondRace"
        :placeholder="t('race')"
        :options="races"
        @change="handleChange('secondRace', $event)"
      />
    </div>
  </div>
</template>
