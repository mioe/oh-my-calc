<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits([
  'handle-focus',
])

const handleClick = ():void => {
  emit('handle-focus', props.munchkin)
}
</script>

<template>
  <button
    class="flex flex-col"
    @click="handleClick()"
  >
    <div class="w-full bg-$secondary rounded-t-[4px] px-[16px] py-[8px]">
      <p class="font-medium">
        {{ munchkin.name }}
      </p>
    </div>
  </button>
</template>
