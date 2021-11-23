<script setup lang="ts">
import { ref } from 'vue'

const MaterialInputProps = ref({
  id: 'string',
  modelValue: 'string',
  type: 'string of input types',
  placeholder: 'string',
  autocomplete: 'string',
  step: 'number',
  disabled: 'boolean',
  required: 'boolean',
})

const MaterialInputTest = ref({
  modelValue: '',
  placeholder: 'Hello World',
})

const MaterialTextareaProps = ref({
  id: 'string',
  modelValue: 'string',
  placeholder: 'string',
  autocomplete: 'string of autocomplete values',
  disabled: 'boolean',
  required: 'boolean',
})

const MaterialTextareaTest = ref({
  modelValue: '',
  placeholder: 'Hello World',
})

const CheckboxProps = ref({
  modelValue: ['boolean', 'string', 'number', 'Array'],
  value: ['string', 'number', 'Array'],
  trueValue: ['boolean', 'string', 'number'],
  falseValue: ['boolean', 'string', 'number'],
  id: 'string',
  checked: 'boolean',
  name: 'string',
  disabled: 'boolean',
  indeterminate: 'boolean',
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
          v-model="MaterialInputTest.modelValue"
          :placeholder="MaterialInputTest.placeholder"
        />
      </div>
      <!-- /demo MaterialInput -->
      <!-- demo MaterialTextarea -->
      <div>
        <h2>MaterialTextarea</h2>
        <TestingPropsTable :props="MaterialTextareaProps" />
        <MaterialTextarea
          v-model="MaterialTextareaTest.modelValue"
          :placeholder="MaterialTextareaTest.placeholder"
        />
      </div>
      <!-- /demo MaterialTextarea -->
      <!-- demo Checkbox -->
      <div>
        <h2>Checkbox</h2>
        <TestingPropsTable :props="CheckboxProps" />
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
