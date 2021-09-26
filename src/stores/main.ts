import { defineStore } from 'pinia'
import { getFirestore } from 'firebase/firestore'
const db = getFirestore()


export const useStore = defineStore('store', {
  state: (): any => ({
    name: '',
    hello: 'hello',
    db: db,
  }),
  getters: {
    greetings(): string { return `${this.hello} ${this.name}` },
  },
  actions: {
    changeName(newName: string): void {
      this.name = newName
    },
  },
})
