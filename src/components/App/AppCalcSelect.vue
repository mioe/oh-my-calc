<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Dropdown from '../_common/Dropdown.vue'
const { t } = useI18n()
const route = useRoute()

const routes = [
  { name: 'MunchkinCalculatorOffline', title: 'munchkinCalculatorOffline' },
  { name: 'Testing', title: 'testing' },
]

const currentTitle: ComputedRef<string> = computed(() => {
  const cuurentRoute = routes.find(e => e.name === route.name)
  return cuurentRoute?.title || route.path
})
</script>

<template>
  <Dropdown
    :menu-styles="{
      width: '100%',
      padding: '8px',
    }"
  >
    <template #header="scope">
      <button
        class="inline-flex min-w-[32px] min-h-[32px] w-full px-[6px] justify-center items-center text-center rounded-[4px] bg-$secondary"
        @click="scope.toggle"
      >
        <span class="font-medium truncate">
          <template v-if="route.name === 'Home'">
            OhMy<span class="text-$primary">Calc</span>
          </template>
          <template v-else>
            {{ t(currentTitle) }}
          </template>
        </span>
      </button>
    </template>
    <template #menu>
      <div class="font-medium">
        <router-link
          :to="{name: 'Home'}"
          class="flex min-h-[32px] items-center justify-center text-center"
        >
          OhMy<span class="text-$primary">Calc</span>
        </router-link>
        <router-link
          v-for="(r, idx) in routes"
          :key="idx"
          :to="{name: r.name}"
          class="flex min-h-[32px] items-center justify-center text-center"
        >
          {{ t(r.title) }}
        </router-link>
      </div>
    </template>
  </Dropdown>
</template>
