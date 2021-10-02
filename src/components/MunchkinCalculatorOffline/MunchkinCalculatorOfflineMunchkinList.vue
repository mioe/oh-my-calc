<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  munchkins: {
    type: Array as PropType<Array<any>>,
    default: () => ([]),
  },
})

const emit = defineEmits([
  'handle-focus',
])

const handleFocus = (munchkin: any):void => {
  emit('handle-focus', munchkin)
}
</script>

<template>
  <section class="grid gap-[8px]">
    <MunchkinCalculatorOfflineCard
      v-for="(m, idx) in munchkins"
      :key="idx"
      :munchkin="m"
      @handle-focus="handleFocus"
    />
  </section>
</template>
