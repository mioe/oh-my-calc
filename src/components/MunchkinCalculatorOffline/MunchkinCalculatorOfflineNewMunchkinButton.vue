<script setup lang="ts">
import { ref, Ref } from 'vue'
const isOpen: Ref<boolean> = ref(false)
const forms: Ref<any> = ref({
  name: '',
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
      <header>
        <h2>Добавления манчинка:</h2>
      </header>
      <div>
        <FormMaterialInput
          v-model="forms.name"
          :placeholder="`Имя`"
        />
      </div>
    </section>
  </ModalDefault>
</template>
