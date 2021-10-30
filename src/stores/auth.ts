import { defineStore } from 'pinia'

import '@/plugins/firebase'
import {
  getAuth,
  setPersistence,
  signInWithRedirect,
  inMemoryPersistence,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth-store', {
  state: (): any => ({
    auth: getAuth(),
  }),
  getters: {
  },
  actions: {
    onSignIn(): void {
      setPersistence(this.auth, inMemoryPersistence)
        .then(() => {
          const provider = new GoogleAuthProvider()
          return signInWithRedirect(this.auth, provider)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error('🦕', errorCode, errorMessage)
        })
    },
    onSignOut(): Promise<any> {
      return new Promise((resolve, reject) => {
        signOut(this.auth).then((result) => {
          // Sign-out successful.
          resolve(result)
        }).catch((err) => {
          // An error happened.
          reject(err)
        })
      })
    },
  },
})
