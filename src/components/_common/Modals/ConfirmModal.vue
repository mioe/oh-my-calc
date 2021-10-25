<script setup lang="ts">
import Modal from './Modal.vue'

const emit = defineEmits([
  'on-cancel',
  'on-confirm',
])

defineProps({
  text: {
    type: String,
    default: 'Lorem text',
  },
  textCancel: {
    type: String,
    default: 'Cancel',
  },
  textConfirm: {
    type: String,
    default: 'Confirm',
  },
})
</script>

<template>
  <Modal>
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px] space-y-[16px]">
        <slot>
          <p class="leading-[1.25]">
            {{ text }}
          </p>
        </slot>
      </header>
      <div
        class="space-y-[16px]"
      >
        <div class="flex items-center justify-end space-x-[8px]">
          <button
            class="button-default"
            style="padding: 0 16px;"
            @click="emit('on-cancel')"
          >
            {{ textCancel }}
          </button>
          <button
            class="button-default clear min-h-[32px] px-[16px] rounded-[4px] bg-$primary text-white"
            @click="emit('on-confirm')"
          >
            {{ textConfirm }}
          </button>
        </div>
      </div>
    </section>
  </Modal>
</template>
