<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  munchkins: {
    type: Array as PropType<Array<any>>,
    default: () => ([]),
  },
  selectedMunchkin: {
    type: Object,
    default: null,
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
      :is-focus="selectedMunchkin && (selectedMunchkin.uid === m.uid)"
      @handle-focus="handleFocus"
    />
    <div class="h-[190px] w-full" />
  </section>
</template>
