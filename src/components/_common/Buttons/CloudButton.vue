<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
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

const auth: ComputedRef<any> = computed(() => store.getAuth)
const currentUser: ComputedRef<any> = computed(() => auth.value?.currentUser)
</script>

<template>
  <Dropdown
    :position-y="positionY"
  >
    <template #header="scope">
      <button
        class="inline-flex min-w-[32px] min-h-[32px] justify-center items-center text-center rounded-[4px] overflow-hidden bg-$secondary"
        @click="scope.toggle"
      >
        <img
          v-if="currentUser"
          :src="currentUser.photoURL"
          :alt="currentUser.displayName"
          class="w-[32px] h-[32px]"
        >
        <div
          v-else
          class="flex items-center"
        >
          <icon-carbon:cloud-upload />
        </div>
      </button>
    </template>
    <template #menu>
      <div>
        <pre class="max-w-[320px]">{{ auth }}</pre>
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
