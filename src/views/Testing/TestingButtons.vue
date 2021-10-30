<script setup lang="ts">
import { ref, Ref } from 'vue'

const btnClasses: Ref<any> = ref([
  'button-default',
  'button-primary',
])
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Buttons
      </h2>
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # Classes
      </h3>

      <p>Class name:</p>
      <ul class="ml-[16px] list-circle pl-[12px]">
        <li
          v-for="cls in btnClasses"
          :key="cls"
        >
          {{ cls }}
        </li>
      </ul>

      <button
        v-for="cls in btnClasses"
        :key="cls"
        class="mr-[8px] mb-[8px]"
        :class="cls"
      >
        {{ cls }}
      </button>
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # DarkModeButton
      </h3>

      <DarkModeButton />
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # LocaleButton
      </h3>

      <LocaleButton />
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # CloudButton
      </h3>

      <CloudButton />
    </div>
  </section>
</template>
