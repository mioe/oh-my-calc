<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

useHead({
  title: 'OhMyCalc',
})
const { t } = useI18n()
</script>

<template>
  <main class="relative px-[16px]">
    <div class="mb-[20px]">
      {{ t('hello') }}
    </div>
  </main>
</template>
