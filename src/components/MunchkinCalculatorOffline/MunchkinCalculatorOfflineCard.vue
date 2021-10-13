<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
  isFocus: {
    type: Boolean,
    default: false,
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
    class="button-default flex flex-col"
    :style="{
      boxShadow: isFocus ? '0 0 0 .2rem var(--primary)' : 'none'
    }"
    @click="handleClick()"
  >
    <div class="w-full bg-$secondary rounded-t-[4px] px-[16px] py-[8px]">
      <p class="font-medium">
        {{ munchkin.name }}
      </p>
    </div>
  </button>
</template>
