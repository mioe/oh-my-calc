<script setup lang="ts">
import { ref, Ref } from 'vue'

defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  min: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: undefined,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void,
}>()

const hook: Ref<HTMLInputElement | null>  = ref(null)
const handleIncrement = () => {
  hook.value?.stepUp()
  onChange(hook.value)
}
const handleDecrement = () => {
  hook.value?.stepDown()
  onChange(hook.value)
}

// Event & { target: HTMLInputElement }
const onChange = (el: HTMLInputElement | null) => {
  console.log('🦕 event', el?.value)
  emit('update:modelValue', Number(el?.value))
}
</script>

<template>
  <div class="inline-flex flex-col items-center space-y-[8px]">
    <button
      class="button-default w-full"
      @click="handleIncrement"
    >
      +
    </button>
    <label class="relative flex flex-col max-w-[60px]">
      <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
        {{ placeholder }}
      </span>
      <input
        ref="hook"
        v-maska="'#*'"
        type="number"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
        @change="onChange($event.target)"
      >
    </label>
    <button
      class="button-default w-full"
      @click="handleDecrement"
    >
      -
    </button>
  </div>
</template>
