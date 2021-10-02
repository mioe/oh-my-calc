<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits([
  'handle-remove',
  'handle-edit',
])
</script>

<template>
  <section class="fixed z-2 left-0 bottom-[48px] bg-$document w-full py-[8px] px-[16px]">
    <div>
      {{ munchkin }}
    </div>
    <div class="space-x-[8px]">
      <button
        @click="emit('handle-remove')"
      >
        <icon-carbon:delete />
      </button>
      <button
        @click="emit('handle-edit')"
      >
        <icon-carbon:edit />
      </button>
    </div>
  </section>
</template>
