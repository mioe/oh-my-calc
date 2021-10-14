<script setup lang="ts">
import { ref, Ref } from 'vue'

const positionX: Ref<string> = ref('left')
const positionY: Ref<string> = ref('bottom')
const keepOnContentClick: Ref<boolean> = ref(false)
const disabled: Ref<boolean> = ref(false)
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Dropdown
      </h2>
      <h3>
        Props:
      </h3>
      <div>
        <span>positionX: </span>
        <label
          v-for="pos in ['left', 'right']"
          :key="pos"
        >
          <input v-model="positionX" type="radio" :value="pos">
          <span>{{ pos }}</span>
        </label>
      </div>
      <div>
        <span>positionY: </span>
        <label
          v-for="pos in ['bottom', 'top']"
          :key="pos"
        >
          <input v-model="positionY" type="radio" :value="pos">
          <span>{{ pos }}</span>
        </label>
      </div>
      <div>
        <span>keepOnContentClick: </span>
        <label>
          <input v-model="keepOnContentClick" type="checkbox">
        </label>
      </div>
      <div>
        <span>disabled: </span>
        <label>
          <input v-model="disabled" type="checkbox">
        </label>
      </div>
    </div>
    <div class="flex justify-center">
      <Dropdown
        :position-x="positionX"
        :position-y="positionY"
        :keep-on-content-click="keepOnContentClick"
        :disabled="disabled"
      >
        <template #header="scope">
          <button
            class="button-default space-x-[4px]"
            @click="scope.toggle"
          >
            <span>Dropdown</span>
            <icon-carbon:chevron-down />
          </button>
        </template>
        <template #menu="scope">
          <p class="whitespace-nowrap">
            <span class="text-$primary">propPositions: </span>
            {{ positionX }} {{ positionY }}
          </p>
          <p class="whitespace-nowrap">
            <span class="text-$primary">transformOrigin: </span>
            {{ scope.transformOrigin.localPositionX }} {{ scope.transformOrigin.localPositionY }}
          </p>
        </template>
      </Dropdown>
    </div>
    <div>
      <!-- eslint-disable -->
      <p class="text-[24px] text-center">
        👇👇👇
      </p>
      <!-- eslint-enable -->
    </div>
    <div class="pt-[700px] pb-[700px]">
      <div class="flex justify-between">
        <Dropdown
          v-for="i in 3"
          :key="`${i}`"
          :position-x="positionX"
          :position-y="positionY"
          :keep-on-content-click="keepOnContentClick"
          :disabled="disabled"
        >
          <template #header="scope">
            <button
              class="button-default space-x-[4px]"
              @click="scope.toggle"
            >
              <icon-bi:three-dots-vertical />
            </button>
          </template>
          <template #menu="scope">
            <p class="whitespace-nowrap">
              <span class="text-$primary">propPositions: </span>
              {{ positionX }} {{ positionY }}
            </p>
            <p class="whitespace-nowrap">
              <span class="text-$primary">transformOrigin: </span>
              {{ scope.transformOrigin.localPositionX }} {{ scope.transformOrigin.localPositionY }}
            </p>
          </template>
        </Dropdown>
      </div>
    </div>
    <div>
      <!-- eslint-disable -->
      <p class="text-[24px] text-center pb-[20px]">
        👆👆👆
      </p>
      <!-- eslint-enable -->
    </div>
  </section>
</template>
