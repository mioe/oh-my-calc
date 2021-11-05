<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { toast, errorToast } from '@/use/useToast'

defineProps({
  positionY: {
    type: String,
    default: 'top',
  },
})

const { t } = useI18n()
const store = useAuthStore()
const { onSignIn, onSignOut } = store

const handleSignIn = () => {
  onSignIn()
}

const handleSignOut = async() => {
  try {
    await onSignOut()
    toast(t('success'), 'success')
  } catch (err) {
    console.error('🦕', err)
    errorToast('Error', `${err}`)
  }
}
</script>

<template>
  <Dropdown
      :position-y="positionY"
  >
    <template #header="scope">
      <button
        @click="scope.toggle"
      >
        <icon-carbon:cloud-upload />
      </button>
    </template>
    <template #menu>
      <div>
        <button
          class="inline-flex items-center p-[8px] rounded-[4px] w-full space-x-[8px] text-left"
          @click="handleSignIn"
        >
          <icon-mi:google-g-logo />
          <span>
            {{ t('signIn') }}
          </span>
        </button>
        <button
          class="inline-flex items-center p-[8px] rounded-[4px] w-full space-x-[8px] text-left"
          @click="handleSignOut"
        >
          <icon-mi:google-g-logo />
          <span>
            {{ t('signOut') }}
          </span>
        </button>
      </div>
    </template>
  </Dropdown>
</template>
