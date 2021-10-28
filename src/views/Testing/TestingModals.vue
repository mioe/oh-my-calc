<script setup lang="ts">
import { ref, Ref } from 'vue'

const modalProps: Ref<any> = ref({
  'v-model': false,
})
const confirmProps: Ref<any> = ref({
  'v-model': false,
  text: 'Lorem text',
  'text-cancel': 'text-cancel',
  'text-confirm': 'text-confirm',
})
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Modals
      </h2>
    </div>
    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # Modal
      </h3>

      <p>Slots:</p>
      <ul class="ml-[16px] list-circle pl-[12px]">
        <li>default</li>
      </ul>

      <p>Props:</p>
      <table class="ml-[16px]">
        <tr
          v-for="(value, key) in modalProps"
          :key="key"
        >
          <td>{{ key }}</td>
          <td><span class="opacity-50">{{ `${value}` }}</span></td>
        </tr>
      </table>

      <button
        class="button-default"
        @click="modalProps['v-model'] = !modalProps['v-model']"
      >
        Toggle modal
      </button>

      <Modal v-model="modalProps['v-model']">
        <div>
          <p v-for="i in 1000" :key="i">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur eius, temporibus ab voluptatibus quos explicabo labore minima quisquam? Aliquid eius nostrum quod aliquam, a labore quae aperiam quo nisi!
          </p>
        </div>
      </Modal>
    </div>

    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # Confirm
      </h3>

      <p>Slots:</p>
      <ul class="ml-[16px] list-circle pl-[12px]">
        <li>default (replace text prop)</li>
      </ul>

      <p>Props:</p>
      <table class="ml-[16px]">
        <tr
          v-for="(value, key) in confirmProps"
          :key="key"
        >
          <td>{{ key }}</td>
          <td><span class="opacity-50">{{ `${value}` }}</span></td>
        </tr>
      </table>

      <button
        class="button-default"
        @click="confirmProps['v-model'] = !confirmProps['v-model']"
      >
        Toggle confirm
      </button>

      <Confirm
        v-model="confirmProps['v-model']"
        text="Lorem text"
        text-cancel="text-cancel"
        text-confirm="text-confirm"
        @on-cancel="confirmProps['v-model'] = false"
        @on-confirm="confirmProps['v-model'] = false"
      />
    </div>
  </section>
</template>
