<script setup lang="ts">
import { computed, ComputedRef, ref, Ref, nextTick, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from '@/use/useToast'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
const { t } = useI18n()
const store = useMunchkinCalculatorOfflineStore()
const { createMunchkin, removeMunchkin, editMunchkin } = store
const munchkins: ComputedRef<Array<any>> = computed(() => store.getMunchkins)

const selectedMunchkin: Ref<any> = ref(null)
const handleFocus = (munchkin: any): void => {
  selectedMunchkin.value = munchkin
}
watchEffect(() => {
  console.log('🦕 watchEffect')
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
        <template #menu="scope">
          <div>
            {{ scope }}
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="sticky z-1 top-[48px] left-0 bg-$document my-[4px] px-[30px] py-[8px] grid grid-cols-[20px,1fr,30px,30px] gap-x-[8px] text-$typography-secondary">
      <p>
        lvl
      </p>
      <p>munchkin</p>
      <p>
        gear
      </p>
      <p>dmg</p>
    </div>

    <div class="px-[16px]">
      <MunchkinCalculatorOfflineMunchkinList
        :munchkins="munchkins"
        :selected-munchkin="selectedMunchkin"
        @handle-focus="handleFocus"
      />
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

  <ModalDefault v-model="isOpenModalRemove">
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px] space-y-[16px]">
        <p class="leading-[1.25]">
          {{ t('confirmRemoveMunchkin') }}?
        </p>
        <p class="truncate">
          {{ t('name') }}: <span class="font-medium">{{ selectedMunchkin.name }}</span>
        </p>
      </header>
      <div
        class="space-y-[16px]"
      >
        <div class="flex items-center justify-end space-x-[8px]">
          <button
            class="button-default"
            style="padding: 0 16px;"
            @click="handleRemoveMunchkin()"
          >
            {{ t('cancel') }}
          </button>
          <button
            class="button-default clear min-h-[32px] px-[16px] rounded-[4px] bg-$primary text-white"
            @click="handleRemoveMunchkin(true)"
          >
            {{ t('remove') }}
          </button>
        </div>
      </div>
    </section>
  </ModalDefault>

  <ModalDefault v-model="isOpenModalMunchkin">
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px]">
        <h2>{{ isEditMunchkin ? t('editingAMunchkin') : t('addingANewMunchkin') }}:</h2>
      </header>
      <form
        class="space-y-[16px]"
        @submit.prevent="handleSubmit()"
      >
        <FormMaterialInput
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
              class="clear min-h-[37px] px-[16px] rounded-[4px] bg-$primary text-white"
              type="submit"
            >
              {{ isEditMunchkin ? t('edit') : t('add') }}
            </button>
          </div>
        </div>
      </form>
    </section>
  </ModalDefault>
</template>
