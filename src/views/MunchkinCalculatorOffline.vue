<script setup lang="ts">
import { computed, ComputedRef, ref, Ref, nextTick, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from '@/use/useToast'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
const { t } = useI18n()
const store = useMunchkinCalculatorOfflineStore()
const { createMunchkin, removeMunchkin, editMunchkin, clearMunchkins, restartGame } = store
const munchkins: ComputedRef<Array<any>> = computed(() => store.getMunchkins)

const selectedMunchkin: Ref<any> = ref(null)
const handleFocus = (munchkin: any): void => {
  selectedMunchkin.value = munchkin
}
watchEffect(() => {
  if (selectedMunchkin.value !== null) {
    editMunchkin(selectedMunchkin.value)
  }
})

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
      toast(t('success'), 'success')
    })
  }
  isOpenModalRemove.value = false
}

const isEditMunchkin: Ref<boolean> = ref(false)
const isOpenModalMunchkin: Ref<boolean> = ref(false)
const form: Ref<any> = ref({
  uid: null,
  name: '',
  originSex: null,
})
const handleCreate = (): void => {
  clearForm()
  isEditMunchkin.value = false
  isOpenModalMunchkin.value = true
}
const clearForm = (): void => {
  form.value.uid = null
  form.value.name = ''
  form.value.originSex = null
}
const handleSubmit = (): void => {
  if (isEditMunchkin.value) {
    editMunchkin(form.value)
  } else {
    createMunchkin(form.value)
  }
  toast(t('success'), 'success')
  isOpenModalMunchkin.value = false
}

const handleEdit = () => {
  isEditMunchkin.value = true
  form.value.uid = selectedMunchkin.value.uid
  form.value.name = selectedMunchkin.value.name
  form.value.originSex = selectedMunchkin.value.originSex
  isOpenModalMunchkin.value = true
}


const isOpenModalClear: Ref<boolean> = ref(false)
const handleClear = () => {
  console.log('🦕 handleClear')
  isOpenModalClear.value = true
}

const handleClearMunchkins = (isAccepted = false) => {
  if (isAccepted) {
    selectedMunchkin.value = null
    nextTick(() => {
      clearMunchkins()
      toast(t('success'), 'success')
    })
  }
  isOpenModalClear.value = false
}

const isOpenModalRestartGame: Ref<boolean> = ref(false)
const handleRestart = () => {
  console.log('🦕 handleRestartGame')
  isOpenModalRestartGame.value = true
}

const handleRestartGame = (isAccepted = false) => {
  if (isAccepted) {
    selectedMunchkin.value = null
    nextTick(() => {
      restartGame()
      toast(t('success'), 'success')
    })
  }
  isOpenModalRestartGame.value = false
}
</script>

<template>
  <main class="py-[8px] flex flex-col">
    <div class="px-[16px] flex space-x-[8px]">
      <MunchkinCalculatorOfflineNewMunchkinButton
        class="w-full"
        @handle-create="handleCreate()"
      />
      <Dropdown>
        <template #header="scope">
          <button
            class="button-default"
            @click="scope.toggle"
          >
            <icon-bi:three-dots-vertical />
          </button>
        </template>
        <template #menu>
          <button
            class="inline-flex items-center p-[8px] rounded-[4px] w-full space-x-[8px] text-left"
            @click="handleRestart"
          >
            <icon-carbon:rotate-360 />
            <span>
              New game
            </span>
          </button>
          <button
            class="inline-flex items-center p-[8px] rounded-[4px] w-full space-x-[8px] text-left"
            @click="handleClear"
          >
            <icon-carbon:subtract-alt />
            <span>
              Clear data
            </span>
          </button>
          <button class="inline-flex items-center p-[8px] rounded-[4px] w-full space-x-[8px] text-left">
            <icon-carbon:3d-mpr-toggle />
            <span>
              Testing data
            </span>
          </button>
        </template>
      </Dropdown>
    </div>

    <div
      v-if="munchkins.length > 0"
      class="sticky z-1 top-[48px] left-0 bg-$document my-[4px] pl-[27px] pr-[27px] py-[8px] grid grid-cols-[20px,1fr,30px,30px] gap-x-[8px] text-$typography-secondary"
    >
      <p class="text-center" :title="t('level')">
        <icon-mi:ifrit />
      </p>
      <p class="pt-[1.5px] pl-[5px]">
        {{ t('munchkin') }}
      </p>
      <p class="text-center" :title="t('gear')">
        <icon-mi:robe />
      </p>
      <p class="text-center" :title="t('damage')">
        <icon-mi:reaper-scythe />
      </p>
    </div>

    <div v-else class="px-[16px] flex space-x-[8px] mt-[4px]">
      <div class="flex-1 w-full flex justify-center opacity-50 text-$typography-secondary">
        <PressTopElement>
          {{ t('pressTheButton') }}
        </PressTopElement>
      </div>
      <div class="w-[32px]" />
    </div>

    <div class="px-[16px]">
      <MunchkinCalculatorOfflineMunchkinList
        :munchkins="munchkins"
        :selected-munchkin="selectedMunchkin"
        @handle-focus="handleFocus"
      />

      <div class="min-h-[190px] w-full py-[24px] text-$typography-secondary opacity-50">
        <p class="mb-[10px]">
          {{ t('tooltip') }}:
        </p>
        <ul class="space-y-[8px]">
          <li>
            <icon-mi:ifrit /> - {{ t('level') }} [1..10]
          </li>
          <li>
            <icon-mi:robe /> - {{ t('gear') }} [0..99]
          </li>
          <li>
            <icon-mi:reaper-scythe /> - {{ t('damage') }} [<icon-mi:ifrit /> + <icon-mi:robe />]
          </li>
        </ul>
      </div>
    </div>
  </main>

  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MunchkinCalculatorOfflinePanel
      v-if="selectedMunchkin"
      v-model="selectedMunchkin"
      @handle-remove="handleRemove"
      @handle-edit="handleEdit"
      @handle-hide="selectedMunchkin = null"
    />
  </transition>

  <Modal v-model="isOpenModalMunchkin">
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px]">
        <h2>{{ isEditMunchkin ? t('editingAMunchkin') : t('addingANewMunchkin') }}:</h2>
      </header>
      <form
        class="space-y-[16px]"
        @submit.prevent="handleSubmit()"
      >
        <MaterialInput
          v-model="form.name"
          :placeholder="t('name')"
          required
        />
        <div class="flex items-center space-x-[16px]">
          <div class="w-full flex space-x-[2px]">
            <label class="rounded-l-[4px] flex items-center justify-center px-[8px] min-h-[37px] bg-$secondary">
              <input v-model="form.originSex" required name="originSex" type="radio" :value="true">
              <span class="ml-[6px]">
                <icon-twemoji:male-sign class="mt-[1px] w-[20px] h-[20px]" />
              </span>
            </label>
            <label class="rounded-r-[4px] flex items-center justify-center px-[8px] min-h-[37px] bg-$secondary">
              <input v-model="form.originSex" type="radio" name="originSex" :value="false">
              <span class="ml-[6px]">
                <icon-twemoji:female-sign class="mt-[1px] w-[20px] h-[20px]" />
              </span>
            </label>
          </div>
          <div>
            <button
              class="min-h-[37px] px-[16px] rounded-[4px] bg-$primary text-white"
              type="submit"
            >
              {{ isEditMunchkin ? t('edit') : t('add') }}
            </button>
          </div>
        </div>
      </form>
    </section>
  </Modal>

  <Confirm
    v-model="isOpenModalRemove"
    :text-cancel="t('cancel')"
    :text-confirm="t('remove')"
    @on-cancel="handleRemoveMunchkin()"
    @on-confirm="handleRemoveMunchkin(true)"
  >
    <p class="leading-[1.25]">
      {{ t('confirmRemoveMunchkin') }}?
    </p>
    <p class="truncate">
      {{ t('name') }}: <span class="font-medium">{{ selectedMunchkin.name }}</span>
    </p>
  </Confirm>

  <Confirm
    v-model="isOpenModalClear"
    text="Clear data?"
    :text-cancel="t('cancel')"
    :text-confirm="t('remove')"
    @on-cancel="handleClearMunchkins()"
    @on-confirm="handleClearMunchkins(true)"
  />

  <Confirm
    v-model="isOpenModalRestartGame"
    text="Restart hame?"
    :text-cancel="t('cancel')"
    :text-confirm="t('remove')"
    @on-cancel="handleRestartGame()"
    @on-confirm="handleRestartGame(true)"
  />
</template>
