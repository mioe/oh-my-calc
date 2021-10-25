<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)
</script>

<template>
  <header class="sticky top-0 left-0 z-4 w-full h-[48px] px-[16px] space-x-[8px] flex items-center justify-between bg-$document">
    <AppCalcSelect class="flex-1" />
    <template v-if="isPortrait">
      <WindowSizeIndicator />
      <OnlineStatusButton />
      <LocaleButton />
      <DarkModeButton />
    </template>
  </header>
</template>
