<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
const store = useMunchkinCalculatorOfflineStore()
const munchkins: ComputedRef<Array<any>> = computed(() => store.getMunchkins)
</script>

<template>
  <main class="px-[16px] py-[8px] flex flex-col space-y-[20px]">
    <MunchkinCalculatorOfflineNewMunchkinButton />
    <MunchkinCalculatorOfflineMunchkinList
      :munchkins="munchkins"
    />
  </main>
</template>
