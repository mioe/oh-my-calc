<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  name: {
    type: String,
    default: null,
  },
  isOpenAdditionalTab: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'handle-hide',
  'handle-additional',
  'handle-edit',
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
          @click="emit('handle-hide')"
        >
          <icon-carbon:previous-outline />
          <span>
            {{ t('hide') }}
          </span>
        </button>
        <span class="md:hidden">
          <button
            class="space-x-[4px]"
            :class="isOpenAdditionalTab ? 'button-primary' : 'button-default'"
            @click="emit('handle-additional')"
          >
            <icon-carbon:accessibility-alt />
            <span class="hidden md:inline">
              {{ t('additional') }}
            </span>
          </button>
        </span>
        <button
          class="button-default space-x-[4px]"
          @click="emit('handle-edit')"
        >
          <icon-carbon:edit />
          <span class="hidden md:inline">
            {{ t('edit') }}
          </span>
        </button>
        <button
          class="button-default space-x-[4px]"
          @click="emit('handle-remove')"
        >
          <icon-carbon:delete />
          <span class="hidden md:inline">
            {{ t('remove') }}
          </span>
        </button>
      </div>
  </header>
</template>
