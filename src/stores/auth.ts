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

const auth = getAuth()

export const useAuthStore = defineStore('auth-store', {
  state: (): any => ({
    hello: 'world',
  }),
  getters: {
  },
  actions: {
    onSignIn(): void {
      setPersistence(auth, inMemoryPersistence)
        .then(() => {
          const provider = new GoogleAuthProvider()
          return signInWithRedirect(auth, provider)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error('🦕', errorCode, errorMessage)
        })
    },
    onSignOut(): Promise<any> {
      return new Promise((resolve, reject) => {
        signOut(auth).then((result) => {
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
