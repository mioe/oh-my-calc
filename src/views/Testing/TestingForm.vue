<script setup lang="ts">
import { ref } from 'vue'

const MaterialInputProps = ref({
  id: 'testInput',
  'v-model': '',
  type: 'text',
  placeholder: 'MaterialInput',
  autocomplete: 'off',
  step: undefined,
  disabled: false,
  required: undefined,
})

const MaterialTextarearops = ref({
  id: 'testTextarea',
  'v-model': '',
  placeholder: 'MaterialTextarea',
  autocomplete: 'off',
  disabled: false,
  required: undefined,
})

const CheckboxTest = ref({
  boolean: false,
  customValue: 'notChecked',
  array: [],
})
</script>

<template>
  <TestingWrapper>
    <template #header>
      Form
    </template>
    <template #default>
      <!-- demo MaterialInput -->
      <div>
        <h2>MaterialInput</h2>
        <TestingPropsTable :props="MaterialInputProps" />
        <MaterialInput
          :id="MaterialInputProps.id"
          v-model="MaterialInputProps['v-model']"
          :type="MaterialInputProps.type"
          :placeholder="MaterialInputProps.placeholder"
          :autocomplete="MaterialInputProps.autocomplete"
          :step="MaterialInputProps.step"
          :disabled="MaterialInputProps.disabled"
          :required="MaterialInputProps.required"
        />
      </div>
      <!-- /demo MaterialInput -->
      <!-- demo MaterialTextarea -->
      <div>
        <h2>MaterialTextarea</h2>
        <TestingPropsTable :props="MaterialTextarearops" />
        <MaterialTextarea
          :id="MaterialTextarearops.id"
          v-model="MaterialTextarearops['v-model']"
          :placeholder="MaterialTextarearops.placeholder"
          :autocomplete="MaterialTextarearops.autocomplete"
          :disabled="MaterialTextarearops.disabled"
          :required="MaterialTextarearops.required"
        />
      </div>
      <!-- /demo MaterialTextarea -->
      <!-- demo Checkbox -->
      <div>
        <h2>Checkbox</h2>
        <div>
          <Checkbox v-model="CheckboxTest.boolean">
            Boolean <span class="opacity-50 ml-[8px]">({{ CheckboxTest.boolean }})</span>
          </Checkbox>
        </div>
        <div>
          <Checkbox
            v-model="CheckboxTest.customValue"
            true-value="checked"
            false-value="notChecked"
          >
            CustomValue <span class="opacity-50 ml-[8px]">({{ CheckboxTest.customValue }})</span>
          </Checkbox>
        </div>
        <div>
          <Checkbox
            v-for="fruit in ['apple', 'strawberry', 'lemon', 'orange']"
            v-model="CheckboxTest.array"
            :value="fruit"
            class="mr-[8px]"
          >
            {{ fruit }}
          </Checkbox>
          <span class="opacity-50">({{ CheckboxTest.array.join(', ') }})</span>
        </div>
      </div>
      <!-- /demo Checkbox -->
    </template>
  </TestingWrapper>
</template>
