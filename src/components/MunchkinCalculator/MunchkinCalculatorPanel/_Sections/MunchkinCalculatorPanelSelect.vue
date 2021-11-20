<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  modelValue: {
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => ([
      { value: '', text: 'Empty value' },
      { value: 1, text: 'Number value' },
    ]),
  },
  style: {
    type: Object,
    default: () => ({
      fontSize: '16px',
      minHeight: '37px',
    }),
  },
  align: {
    type: String,
    default: 'center',
    validator: (x: string) => ['center', 'right', 'left'].includes(x),
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
  (e: 'change', value: any): void,
}>()

const onChange = (el: any) => {
  emit('update:modelValue', el?.value)
  emit('change', el?.value)
}
</script>

<template>
  <label class="relative flex flex-col">
    <span
      :class="[
        'absolute top-[4px] text-$typography-secondary text-[11px]',
        { 'left-[50%] transform -translate-x-[50%]': align === 'center' },
        { 'left-[10px]': align === 'left' },
        { 'right-[10px]': align === 'right' },
      ]">
      {{ placeholder }}
    </span>
    <select
      :class="[
        'w-full px-[10px] pt-[16px] rounded-[4px] bg-$secondary focused',
        { 'text-center': align === 'center' },
        { 'text-left': align === 'left' },
        { 'text-right': align === 'right' },
      ]"
      :style="style"
      :value="modelValue"
      @change="onChange($event.target)"
    >
      <option
        v-for="(opt, idx) in options"
        :key="idx"
        :value="opt.value"
      >
        {{ opt.text }}
      </option>
    </select>
  </label>
</template>
