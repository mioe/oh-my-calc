<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)
</script>

<template>
  <footer
    v-if="!isPortrait"
    class="sticky bottom-0 left-0 z-2 w-full h-[48px] mt-auto px-[16px] space-x-[8px] flex items-center justify-between bg-$document"
  >
    <p class="font-medium">
      OhMy<span class="text-$primary">Calc</span>
    </p>

    <div class="flex-1 w-full flex justify-end items-center space-x-[8px]">
      <WindowSizeIndicator />
      <LocaleButton />
      <DarkModeButton />
    </div>
  </footer>
</template>
