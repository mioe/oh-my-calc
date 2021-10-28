<script setup lang="ts">
import { ref, Ref } from 'vue'

const modalProps: Ref<any> = ref({
  'v-model': false,
})
const isOpenConfirm: Ref<boolean> = ref(false)
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

      <p>Props:</p>
      <table>
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
  </section>
</template>
