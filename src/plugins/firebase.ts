/**
 * Firebase App (the core Firebase SDK) is always required and
 * must be listed before other Firebase SDKs
 */
import { initializeApp } from 'firebase/app'

/**
 * Your web app's Firebase configuration
 */
const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
}

/**
 * Initialize Firebase
 */
// @ts-ignore
initializeApp(firebaseConfig)
