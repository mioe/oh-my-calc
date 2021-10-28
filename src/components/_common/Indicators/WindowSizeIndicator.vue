<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
</script>

<template>
  <div class="button-default space-x-[4px]">
    <icon-ph:app-window-light />
    <p class="text-[12px]">
      {{ width }} x {{ height }}
    </p>
  </div>
</template>
