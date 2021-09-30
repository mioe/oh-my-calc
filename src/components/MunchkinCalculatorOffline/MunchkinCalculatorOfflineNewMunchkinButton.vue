<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from '@/use/useToast'
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'

const { t } = useI18n()
const store = useMunchkinCalculatorOfflineStore()
const { addMunchkin } = store

const isOpen: Ref<boolean> = ref(false)
const form: Ref<any> = ref({
  name: '',
  originSex: null,
})

const clearForm = (): void => {
  form.value.name = ''
  form.value.originSex = null
}

const handleAddMunchkin = (): void => {
  addMunchkin(form.value)
  clearForm()
  toast(t('success'), 'success')
  isOpen.value = false
}
</script>

<template>
  <button
    class="space-x-[8px]"
    @click="isOpen = true"
  >
    <icon-carbon:add-alt />
    <span>
      {{ t('addNewMunchkin') }}
    </span>
  </button>

  <ModalDefault
    v-model="isOpen"
  >
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px]">
        <h2>{{ t('addingANewMunchkin') }}:</h2>
      </header>
      <form
        class="space-y-[16px]"
        @submit.prevent="handleAddMunchkin()"
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
              {{ t('add') }}
            </button>
          </div>
        </div>
      </form>
    </section>
  </ModalDefault>
</template>
