<script setup lang="ts">
import { ref, Ref } from 'vue'

const materialInputProps: Ref<any> = ref({
  id: 'testInput',
  'v-model': '',
  type: 'text',
  placeholder: 'MaterialInput',
  autocomplete: 'off',
  step: undefined,
  disabled: false,
  required: undefined,
})

const materialTextareaProps: Ref<any> = ref({
  id: 'testTextarea',
  'v-model': '',
  placeholder: 'MaterialTextarea',
  autocomplete: 'off',
  disabled: false,
  required: undefined,
})
</script>

<template>
  <section class="space-y-[24px]">
    <div class="space-y-[8px]">
      <h2 class="text-$primary">
        # Form
      </h2>
    </div>
    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # MaterialInput
      </h3>

      <p>Props:</p>
      <table>
        <tr
          v-for="(value, key) in materialInputProps"
          :key="key"
        >
          <td>{{ key }}</td>
          <td><span class="opacity-50">{{ `${value}` }}</span></td>
        </tr>
      </table>

      <MaterialInput
        :id="materialInputProps.id"
        v-model="materialInputProps['v-model']"
        :type="materialInputProps.type"
        :placeholder="materialInputProps.placeholder"
        :autocomplete="materialInputProps.autocomplete"
        :step="materialInputProps.step"
        :disabled="materialInputProps.disabled"
        :required="materialInputProps.required"
      />
    </div>
    <div class="space-y-[8px]">
      <h3 class="text-$primary">
        # MaterialTextarea
      </h3>

      <p>Props:</p>
      <table>
        <tr
          v-for="(value, key) in materialTextareaProps"
          :key="key"
        >
          <td>{{ key }}</td>
          <td><span class="opacity-50">{{ `${value}` }}</span></td>
        </tr>
      </table>

      <MaterialTextarea
        :id="materialTextareaProps.id"
        v-model="materialTextareaProps['v-model']"
        :placeholder="materialTextareaProps.placeholder"
        :autocomplete="materialTextareaProps.autocomplete"
        :disabled="materialTextareaProps.disabled"
        :required="materialTextareaProps.required"
      />
    </div>
  </section>
</template>
