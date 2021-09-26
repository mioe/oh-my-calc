<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useOnline } from '@vueuse/core'

useHead({
  title: 'OhMyCalc',
})

const isOnline = useOnline()
</script>

<template>
  <main class="relative">
    Is Online: {{ isOnline }}
  </main>
</template>
