import { defineStore } from 'pinia'

export const useMunchkinCalculatorOfflineStore = defineStore('munchkin-calculator-offline-store', {
  state: (): any => ({
    munchkins: localStorage.getItem('munchkin-calculator-offline-store')
      // @ts-ignore
      ? JSON.parse(localStorage.getItem('munchkin-calculator-offline-store'))
      : [],
  }),
  getters: {
    getMunchkins(): Array<any> {
      return this.munchkins
    },
  },
  actions: {
    commit() {
      localStorage.setItem('munchkin-calculator-offline-store', JSON.stringify(this.munchkins))
    },

    addMunchkin(munchkin: any): void {
      const { name, originSex } = munchkin
      const newMunchkin = {
        uid: `munchkinLocal${Date.now()}`,
        name,
        originSex,
        currentSex: originSex,
        level: 1,
        gear: 0,
      }
      this.munchkins.push(newMunchkin)
      this.commit()
    },
  },
})
