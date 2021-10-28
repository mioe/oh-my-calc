import { defineStore } from 'pinia'

const munchkinRaces = [
  'elf',
  'dwarf',
  'halfling',
  'orc',
  'human',
  'gnome',
]

const munchkinClasses = [
  'wizard',
  'warrior',
  'cleric',
  'thief',
  'bard',
  'ranger',
]

export const useMunchkinCalculatorOfflineStore = defineStore('munchkin-calculator-offline-store', {
  state: (): any => ({
    munchkins: localStorage.getItem('munchkin-calculator-offline-store')
      // @ts-ignore
      ? JSON.parse(localStorage.getItem('munchkin-calculator-offline-store'))
      : [],
    munchkinRaces,
    munchkinClasses,
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

    createMunchkin(munchkin: any): void {
      const { name, originSex } = munchkin
      const newMunchkin = {
        uid: `munchkinLocal${Date.now()}`,
        name,
        originSex,
        currentSex: originSex,
        level: 1,
        gear: 0,
        class: null,
        race: 'human',
      }
      this.munchkins.push(newMunchkin)
      this.commit()
    },

    removeMunchkin(munchkin: any): void {
      const { uid } = munchkin
      const findIdx = this.munchkins.findIndex((m: any) => m.uid === uid)
      if (findIdx !== -1) {
        this.munchkins.splice(findIdx, 1)
        this.commit()
      }
    },

    editMunchkin(munchkin: any): void {
      const {
        uid,
        name,
        originSex,
        currentSex,
        level,
        gear,
        class: munchkinClass,
        race,
      } = munchkin
      const find = this.munchkins.find((m: any) => m.uid === uid)
      if (find) {
        find.name = name || find.name
        find.originSex = originSex || find.originSex
        find.currentSex = typeof currentSex === 'boolean' ? currentSex : find.currentSex
        find.level = level || find.level
        find.gear = gear ?? find.gear
        find.class = munchkinClass ?? find.class
        find.race = race || find.race
        this.commit()
      }
    },

    clearMunchkins() {
      this.munchkins = []
      this.commit()
    },

    restartGame() {
      this.munchkins = this.munchkins.map((e: any) => ({
        ...e,
        currentSex: e.originSex,
        level: 1,
        gear: 0,
        class: null,
        race: 'human',
      }))
    },
  },
})
