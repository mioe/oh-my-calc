<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  munchkins: {
    type: Array as PropType<Array<any>>,
    default: () => ([]),
  },
})
</script>

<template>
  <section class="grid gap-[8px]">
    <MunchkinCard
      v-for="(m, idx) in munchkins"
      :key="idx"
      :munchkin="m"
    />
  </section>
</template>
