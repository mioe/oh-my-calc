<script setup lang="ts">
import { computed, ComputedRef, ref, Ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
const { t } = useI18n()
const store = useMunchkinCalculatorOfflineStore()
const { removeMunchkin } = store
const munchkins: ComputedRef<Array<any>> = computed(() => store.getMunchkins)

const selectedMunchkin: Ref<any> = ref(null)
const handleFocus = (munchkin: any): void => {
  selectedMunchkin.value = munchkin
}

const isOpenModalRemove: Ref<boolean> = ref(false)
const handleRemove = () => {
  console.log('🦕 handleRemove')
  isOpenModalRemove.value = true
}
const handleRemoveMunchkin = (isRemove = false) => {
  if (isRemove) {
    removeMunchkin(selectedMunchkin.value)
    nextTick(() => {
      selectedMunchkin.value = null
    })
  }
  isOpenModalRemove.value = false
}

const handleEdit = () => {
  console.log('🦕 handleEdit')
}
</script>

<template>
  <main class="px-[16px] py-[8px] flex flex-col space-y-[20px]">
    <MunchkinCalculatorOfflineNewMunchkinButton />
    <MunchkinCalculatorOfflineMunchkinList
      :munchkins="munchkins"
      @handle-focus="handleFocus"
    />
    <MunchkinCalculatorOfflinePanel
      v-if="selectedMunchkin"
      :munchkin="selectedMunchkin"
      @handle-remove="handleRemove"
      @handle-edit="handleEdit"
    />
  </main>

  <ModalDefault v-model="isOpenModalRemove">
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px]">
        <h2>Удалить манчкина. {{ selectedMunchkin.name }}</h2>
      </header>
      <div
        class="space-y-[16px]"
      >
        <div class="flex items-center justify-end space-x-[8px]">
          <button
            style="padding: 0 16px;"
            @click="handleRemoveMunchkin()"
          >
            {{ t('cancel') }}
          </button>
          <button
            class="clear min-h-[32px] px-[16px] rounded-[4px] bg-$primary text-white"
            @click="handleRemoveMunchkin(true)"
          >
            {{ t('remove') }}
          </button>
        </div>
      </div>
    </section>
  </ModalDefault>
</template>
