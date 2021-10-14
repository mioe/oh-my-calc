<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
const { t } = useI18n()
const route = useRoute()

const isOpen: Ref<boolean> = ref(false)
const routes = [
  { name: 'MunchkinCalculatorOffline', title: 'munchkinCalculatorOffline' },
  { name: 'Testing', title: 'Testing' },
]

const currentTitle: ComputedRef<string> = computed(() => {
  const cuurentRoute = routes.find(e => e.name === route.name)
  return cuurentRoute?.title || route.path
})

const handleBlur = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}
</script>

<template>
  <button class="button-default relative w-full" @click="isOpen = !isOpen" @blur="handleBlur">
    <span class="font-medium truncate">
      <template v-if="route.name === 'Home'">
        OhMy<span class="text-$primary">Calc</span>
      </template>
      <template v-else>
        {{ t(currentTitle) }}
      </template>
    </span>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <section
        v-if="isOpen"
        class="absolute w-full bg-$secondary py-[6px] px-[16px] rounded-[4px] left-0"
        :style="{
          top: 'calc(100% + 10px)',
          boxShadow: '0 22px 70px 4px rgba(0, 0, 0, 0.56)',
        }"
      >
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
      </section>
    </transition>
  </button>
</template>
