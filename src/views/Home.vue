<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

useHead({
  title: 'OhMyCalc',
})
const { t } = useI18n()

const currentOrintation: ComputedRef<any> = computed(() => screen.orientation.type)

const orientations: Ref<Array<string>> = ref([
  'any',
  'natural',
  'landscape',
  'portrait',
  'portrait-primary',
  'portrait-secondary',
  'landscape-primary',
  'landscape-secondary',
])
const changeOrientation = (orientation: any) => {
  screen.orientation.lock(orientation)
}
</script>

<template>
  <main class="relative px-[16px]">
    <div class="mb-[20px]">
      {{ t('hello') }}
    </div>
    <div>
      <p class="mb-2">
        Test orientation:
      </p>
      <p class="mb-2">
        current: <pre>{{ currentOrintation }}</pre>
      </p>
      <button
        v-for="orientation in orientations"
        :key="orientation"
        class="mb-2 mr-2"
        @click="changeOrientation(orientation)"
      >
        {{ orientation }}
      </button>
    </div>
  </main>
</template>
