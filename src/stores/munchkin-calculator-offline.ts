import { defineStore } from 'pinia'

export const useMunchkinCalculatorOfflineStore = defineStore('munchkin-calculator-offline-store', {
  state: (): any => ({
    munchkins: [],
  }),
  getters: {
    getMunchkins(): Array<any> {
      return this.munchkins
    },
  },
  actions: {
    addMunchkin(munchkinName: string): void {
      const newMunchkin = {
        uid: `local${Date.now()}`,
        level: 1,
        gear: 0,
        name: munchkinName,
      }
      this.munchkins.push(newMunchkin)
    },
  },
})
