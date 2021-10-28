<script setup lang="ts">
import { toast, errorToast } from '@/use/useToast'

const handleDefault = () => {
  toast('🦕 handleDefault')
}

const handleInfo = () => {
  toast('🦕 handleInfo', 'info')
}

const handleWarning = () => {
  toast('🦕 handleWarning', 'warning')
}


const handleSuccess = () => {
  toast('🦕 handleSuccess', 'success')
}

const handleDanger = () => {
  toast('🦕 handleDanger', 'danger')
}

const handleError = () => {
  errorToast('🦕 handleError', 'Some description....')
}
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Others
      </h2>
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # useToast
      </h3>
      <div class="opacity-50">
        <a href="https://github.com/szboynono/mosha-vue-toastify" target="_blank">
          https://github.com/szboynono/mosha-vue-toastify
        </a>
      </div>

      <button class="button-default mr-[8px] mb-[8px]" @click="handleDefault">
        Default
      </button>
      <button class="button-default mr-[8px] mb-[8px]" @click="handleInfo">
        Info
      </button>
      <button class="button-default mr-[8px] mb-[8px]" @click="handleWarning">
        Warning
      </button>
      <button class="button-default mr-[8px] mb-[8px]" @click="handleSuccess">
        Success
      </button>
      <button class="button-default mr-[8px] mb-[8px]" @click="handleDanger">
        Danger
      </button>
      <button class="button-default mr-[8px] mb-[8px]" @click="handleError">
        Error
      </button>
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # unplugin-icons
      </h3>
      <div class="opacity-50">
        <a href="https://github.com/antfu/unplugin-icons" target="_blank">
          https://github.com/antfu/unplugin-icons
        </a>
      </div>

      <icon-mi:robe />
      <icon-mi:ifrit />
      <icon-mi:reaper-scythe />
    </div>
  </section>
</template>
