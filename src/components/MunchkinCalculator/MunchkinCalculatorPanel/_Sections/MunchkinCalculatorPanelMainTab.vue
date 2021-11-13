<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div>
    <MunchkinCalculatorPanelInputNumber
      :placeholder="t('level')"
    />
    <MunchkinCalculatorPanelInputNumber
      :placeholder="t('gear')"
    />
  </div>
</template>
