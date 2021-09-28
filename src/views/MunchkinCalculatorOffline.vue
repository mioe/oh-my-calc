<script setup lang="ts">
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'

const store = useMunchkinCalculatorOfflineStore()
</script>

<template>
  <main class="px-[16px] py-[8px] flex flex-col">
    <MunchkinCalculatorOfflineNewMunchkinButton />
  </main>
</template>
