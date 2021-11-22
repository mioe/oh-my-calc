<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: [
    Boolean,
    String,
    Number,
    Array as () => Array<string | number>,
  ],
  value: [
    String,
    Number,
    Array as () => Array<string>
  ],
  trueValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  falseValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  checked: Boolean,
  id: String,
  name: String,
  round: Boolean,
  disabled: Boolean,
  indeterminate: Boolean,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
}>()

const computedValue = computed({
  get(): boolean | string | number | (string | number)[] | undefined {
    return props.modelValue
  },
  set(value: boolean | string | number | (string | number)[] | undefined) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <label class="mi-checkbox inline-flex relative cursor-pointer items-center">
    <input
      v-model="computedValue"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :true-value="trueValue"
      :false-value="falseValue"
      :value="value"
      :checked="checked"
      class="absolute -z-1 w-[1px] h-[1px] opacity-0"
    >
    <span class="mi-checkmark inline-block w-[18px] h-[18px] p-[1px] border-2 rounded-[4px] mr-[4px]" />

    <slot />
  </label>
</template>

<style lang="sass">
.mi-checkmark::before
  content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"%3E%3Cpath d="M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" fill="white"%3E%3C/path%3E%3C/svg%3E')
  @apply opacity-0

.mi-checkbox:hover input[type=checkbox] ~ .mi-checkmark
  @apply bg-$secondary

.mi-checkbox input[type=checkbox]:checked ~ .mi-checkmark
  @apply bg-$primary

.mi-checkbox input[type=checkbox]:checked ~ .mi-checkmark::before
  @apply opacity-100
</style>
