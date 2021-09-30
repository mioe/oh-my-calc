<script setup lang="ts">
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable'
import { defineProps, ref , onMounted } from 'vue'

defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
})

const hook = ref(null)
onMounted(() => {
  gsap.registerPlugin(Draggable)

  Draggable.create(hook.value, {
    type: 'rotation',
    throwProps: true,
    edgeResistance: 0.85,
    bounds: {minRotation:0, maxRotation:360},
  })
})
</script>

<template>
  <div class="flex">
    <div class="bg-$secondary rounded-l-[4px] p-[8px] space-x-[8px]">
      <div class="space-y-[4px]">
        <p class="text-[16px] inline-flex items-center">
          <icon-twemoji:male-sign v-if="munchkin.currentSex" class="mt-[1px] mr-[4px] w-[16px] h-[16px]" />
          <icon-twemoji:female-sign v-else class="mt-[1px] mr-[4px] w-[16px] h-[16px]" />
          {{ munchkin.name }}
        </p>
        <p>
          <span class="text-$typography-secondary">Level:</span> {{ munchkin.level }}
          <span class="text-$typography-secondary"> / </span>
          <span class="text-$typography-secondary">Gear:</span> {{ munchkin.gear }}
          <span class="text-$typography-secondary"> / </span>
          <span class="text-$typography-secondary">DMG:</span> {{ munchkin.level + munchkin.gear }}
        </p>
      </div>
    </div>
    <div class="bg-$secondary rounded-r-[4px] p-[8px] space-x-[8px]">
      <button class="flex h-full">
        <div ref="hook" class="bg-red-300 w-[40px] h-[40px]" />
        <icon-carbon:settings />
      </button>
    </div>
  </div>
</template>
