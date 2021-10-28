<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const currentRoute = useRoute()
const { options: { routes } } = router

const testingRoutes: ComputedRef<RouteRecordRaw[] | undefined> = computed(() => routes.find(route => route.name === 'Testing')?.children)
</script>

<template>
  <main class="relative px-[16px] py-[8px] flex flex-col space-y-[20px]">
    <section>
      <router-link
        v-for="route in testingRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        class="mr-[8px] mb-[8px]"
        :class="currentRoute.name === route.name ? 'button-primary' : 'button-default'"
      >
        {{ route.path }}
      </router-link>
    </section>

    <router-view />
  </main>
</template>
