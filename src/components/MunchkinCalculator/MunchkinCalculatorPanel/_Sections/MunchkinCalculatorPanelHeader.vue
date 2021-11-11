<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  name: {
    type: String,
    default: null,
  },
})

const emit = defineEmits([
  'handle-hide',
  'handle-edit',
  'handle-special-tab',
  'handle-remove',
])
</script>

<template>
  <header class="flex items-center justify-between space-x-[8px]">
    <p class="block flex-1 w-full truncate font-medium text-[16px]">
      {{ name }}
    </p>
    <div class="space-x-[8px]">
        <button
          class="button-default space-x-[4px]"
        >
          <icon-carbon:previous-outline />
          <span>
            {{ t('hide') }}
          </span>
        </button>
        <button
          :class="true ? 'button-primary' : 'button-default'"
        >
          <icon-carbon:accessibility-alt />
        </button>
        <button
          class="button-default space-x-[4px]"
        >
          <icon-carbon:edit />
          <span>
            {{ t('edit') }}
          </span>
        </button>
        <button
          class="button-default space-x-[4px]"
        >
          <icon-carbon:delete />
          <span>
            {{ t('remove') }}
          </span>
        </button>
      </div>
  </header>
</template>
