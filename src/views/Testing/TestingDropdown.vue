<script setup lang="ts">
import { ref, Ref } from 'vue'

const dropdownProps: Ref<any> = ref({
  'position-x': 'left',
  'position-y': 'bottom',
  'keep-on-content-click': false,
  disabled: false,
})
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Dropdown
      </h2>

      <p>Slots:</p>
      <ul class="ml-[16px] list-circle pl-[12px]">
        <li>header (scope method toggle)</li>
        <li>menu</li>
      </ul>

      <h3>
        Props:
      </h3>
      <div class="ml-[16px]">
        <span>position-x: </span>
        <label
          v-for="pos in ['left', 'right']"
          :key="pos"
        >
          <input v-model="dropdownProps['position-x']" type="radio" :value="pos">
          <span>{{ pos }}</span>
        </label>
      </div>
      <div class="ml-[16px]">
        <span>position-y: </span>
        <label
          v-for="pos in ['bottom', 'top']"
          :key="pos"
        >
          <input v-model="dropdownProps['position-y']" type="radio" :value="pos">
          <span>{{ pos }}</span>
        </label>
      </div>
      <div class="ml-[16px]">
        <span>keep-on-content-click: </span>
        <label>
          <input v-model="dropdownProps['keep-on-content-click']" type="checkbox">
        </label>
      </div>
      <div class="ml-[16px]">
        <span>disabled: </span>
        <label>
          <input v-model="dropdownProps.disabled" type="checkbox">
        </label>
      </div>
    </div>
    <div class="flex justify-center">
      <Dropdown
        :position-x="dropdownProps['position-x']"
        :position-y="dropdownProps['position-y']"
        :keep-on-content-click="dropdownProps['keep-on-content-click']"
        :disabled="dropdownProps.disabled"
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
            {{ dropdownProps['position-x'] }} {{ dropdownProps['position-y'] }}
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
          :position-x="dropdownProps['position-x']"
          :position-y="dropdownProps['position-y']"
          :keep-on-content-click="dropdownProps['keep-on-content-click']"
          :disabled="dropdownProps.disabled"
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
              {{ dropdownProps['position-x'] }} {{ dropdownProps['position-y'] }}
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
