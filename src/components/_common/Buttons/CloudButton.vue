<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
const { signIn } = store

const handleSignIn = async() => {
  await signIn()
}
</script>

<template>
  <button
    @click="handleSignIn"
  >
    ll
  </button>
</template>
