<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void,
  (e: 'change', value: boolean): void,
}>()

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const handleSex = (bool: boolean) => {
  emit('update:modelValue', bool)
  emit('change', bool)
}
</script>

<template>
  <div class="w-full flex items-center space-x-[8px]">
    <p class="text-$typography-secondary">
      {{ t('sex') }}:
    </p>
    <button
      :class="modelValue === true ? 'button-primary' : 'button-default'"
      @click="handleSex(true)"
    >
      <icon-twemoji:male-sign class="w-[20px] h-[20px]" />
    </button>
    <button
      :class="modelValue === false ? 'button-primary' : 'button-default'"
      @click="handleSex(false)"
    >
      <icon-twemoji:female-sign class="w-[20px] h-[20px]" />
    </button>
    <p class="text-$typography-secondary opacity-25 lowercase truncate max-w-[calc(100vw-300px)] md:max-w-none">
      ({{ modelValue ? t('male') : t('female') }})
    </p>
  </div>
</template>
