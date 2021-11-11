<script setup lang="ts">
import { toast, errorToast, ToastTypes } from '@/use/useToast'

const allToast: ToastTypes[] = [
  'default',
  'info',
  'warning',
  'success',
  'danger',
]

const handleToast = (type: ToastTypes) => { toast(`🦕 handle-${type}`, type) }
const handleError = () => { errorToast('🦕 handle-error', 'Some description....') }
</script>

<template>
  <TestingWrapper>
    <template #header>
      Others
    </template>
    <template #default>
      <!-- demo useToast -->
      <div>
        <h2>
          useToast
        </h2>
        <div class="text-$typography-secondary">
          <a href="https://github.com/szboynono/mosha-vue-toastify" target="_blank">
            https://github.com/szboynono/mosha-vue-toastify
          </a>
        </div>
        <div>
          <button
            v-for="toast in allToast"
            :key="toast"
            class="button-default mr-[8px] mb-[8px]"
            @click="handleToast(toast)"
          >
            {{ toast }}
          </button>
          <button
            class="button-default mr-[8px] mb-[8px]"
            @click="handleError"
          >
            error
          </button>
        </div>
      </div>
      <!-- /demo useToast -->
      <!-- demo unplugin-icons -->
      <div>
        <h2>
          unplugin-icons
        </h2>
        <div class="text-$typography-secondary">
          <a href="https://github.com/antfu/unplugin-icons" target="_blank">
            https://github.com/antfu/unplugin-icons
          </a>
        </div>
        <div>
          <p>My icons in folder <span class="opacity-25">(@/assets/icons)</span></p>
          <icon-mi:robe />
          <icon-mi:ifrit />
          <icon-mi:reaper-scythe />
          <icon-mi:google-g-logo />
        </div>
        <div>
          <p>Remote icons <a class="opacity-25" href="https://icones.netlify.app/" target="_blank">(https://icones.netlify.app/)</a></p>
          <icon-flat-color-icons:address-book/>
          <icon-flat-color-icons:google />
          <icon-mdi:account-circle />
          <icon-uil:bitcoin />
          <icon-ri:app-store-fill />
        </div>
      </div>
      <!-- /demo unplugin-icons -->
    </template>
  </TestingWrapper>
</template>
