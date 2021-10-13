<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const emit = defineEmits([
  'handle-create',
])
</script>

<template>
  <button
    class="button-default space-x-[8px]"
    @click="emit('handle-create')"
  >
    <icon-carbon:add-alt />
    <span>
      {{ t('addNewMunchkin') }}
    </span>
  </button>
</template>
