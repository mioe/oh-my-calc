<script setup lang="ts">
import { computed, ComputedRef, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
const { t } = useI18n()
const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)

defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits([
  'handle-remove',
  'handle-edit',
  'handle-hide',
])
</script>

<template>
  <section
    class="fixed z-1 left-0 bg-$document w-full py-[8px] px-[16px] border-t-3 border-$primary"
    :style="{
      bottom: isPortrait ? '0px' : '48px'
    }"
  >
    <div class="flex items-center justify-between space-x-[8px]">
      <div class="space-x-[8px]">
        <h2 class="font-medium text-[16px]">
          {{ munchkin.name }}
        </h2>
      </div>
      <div class="space-x-[8px]">
        <button
          class="space-x-[4px]"
          @click="emit('handle-hide')"
        >
          <icon-carbon:previous-outline />
          <span>
            {{ t('hide') }}
          </span>
        </button>
        <button
          @click="emit('handle-edit')"
        >
          <icon-carbon:edit />
        </button>
        <button
          @click="emit('handle-remove')"
        >
          <icon-carbon:delete />
        </button>
      </div>
    </div>
  </section>
</template>
