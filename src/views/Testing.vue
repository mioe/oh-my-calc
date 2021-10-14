<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="relative px-[16px]">
    <div class="space-y-[20]">
      <div class="pb-[1300px]">
        i18n: {{ t('hello') }}
      </div>
      <div class="pb-[1300px] flex justify-between">
        <Dropdown
          v-for="i in 3"
          :key="`${i}`"
        >
          <template #header="scope">
            <button @click="scope.toggle">
              Test Dropdown
            </button>
          </template>
          <template #menu>
            <div>
              gggg
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </main>
</template>
