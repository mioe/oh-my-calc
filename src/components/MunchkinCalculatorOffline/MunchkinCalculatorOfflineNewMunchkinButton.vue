<script setup lang="ts">
import { ref, Ref } from 'vue'
const isOpen: Ref<boolean> = ref(false)
const form: Ref<any> = ref({
  name: '',
  originSex: null,
})
</script>

<template>
  <button @click="isOpen = true">
    Add new munchkin
  </button>

  <ModalDefault
    v-model="isOpen"
  >
    <section class="w-full max-w-[320px] mx-auto px-[16px] py-[24px] rounded-[4px] bg-$document">
      <header class="mb-[24px]">
        <h2>Добавления нового манчинка:</h2>
      </header>
      <div class="space-y-[16px]">
        <FormMaterialInput
          v-model="form.name"
          :placeholder="`Имя`"
        />
        <div class="flex items-center space-x-[16px]">
          <div class="w-full flex">
            <label class="rounded-l-[4px] flex items-center justify-center px-[8px] min-h-[37px] bg-$secondary">
              <input v-model="form.originSex" type="radio" :value="true">
              <span class="text-[20px] ml-[6px]">
                <icon-twemoji:male-sign />
              </span>
            </label>
            <label class="ounded-r-[4px] flex items-center justify-center px-[8px] min-h-[37px] bg-$secondary">
              <input v-model="form.originSex" type="radio" :value="false">
              <span class="text-[20px] ml-[6px]">
                <icon-twemoji:female-sign />
              </span>
            </label>
          </div>
          <button
            class="clear min-h-[37px] px-[16px] rounded-[4px] bg-$primary text-white"
          >
            Добавить
          </button>
        </div>
      </div>
    </section>
  </ModalDefault>
</template>
