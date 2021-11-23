<script setup lang="ts">
import { ref, Ref, watch } from 'vue'

const MunchkinCalculatorPanelInputNumberProps = ref({
  modelValue: 'number',
  placeholder: 'string',
  min: 'number',
  max: 'number',
  step: 'number',
  style: 'Object',
})

const MunchkinCalculatorPanelInputNumberTest = ref({
  modelValue: 0,
  placeholder: 'Placeholder',
  min: 0,
  max: 10,
  step: 1,
  style: {
    width: '150px',
  },
})

const MunchkinCalculatorPanelSelectProps = ref({
  modelValue: 'string',
  placeholder: 'string',
  options: 'Array',
  style: 'Object',
})

const MunchkinCalculatorPanelSelectText = ref({
  modelValue: null,
  placeholder: 'Hello World',
  options: [
    { value: '', text: 'Empty value' },
    { value: null, text: 'Null value' },
    { value: true, text: 'Boolean value' },
    { value: 1, text: 'Number value' },
    { value: 'tada', text: 'String value' },
  ],
  style: {
    fontSize: '12px',
    minHeight: '32px',
  },
})


const MunchkinCalculatorPanelProps = ref({
  name: 'string',
  currentSex: 'boolean',
  level: 'number',
  gear: 'number',
  class: ['null', 'string'],
  race: ['null', 'string'],
})
const MunchkinCalculatorPanelTest: Ref<any> = ref(null)
const togglePanel = () => {
  MunchkinCalculatorPanelTest.value = MunchkinCalculatorPanelTest.value === null
    ? {
      name: 'Wwwww',
      currentSex: true,
      level: 1,
      gear: 0,
      class: null,
      race: 'human',
    }
    : null
}

watch(MunchkinCalculatorPanelTest,
  (val: any) => { console.log('🦕 watch detected', val?.level )},
  { deep: true },
)
</script>

<template>
  <TestingWrapper>
    <template #header>
      TestingMunchkinCalculatorElements
    </template>
    <template #default>
      <!-- demo MunchkinCalculatorPanelInputNumber -->
      <div>
        <h2>MunchkinCalculatorPanelInputNumber</h2>
        <TestingPropsTable :props="MunchkinCalculatorPanelInputNumberProps" />
        <MunchkinCalculatorPanelInputNumber
          v-model="MunchkinCalculatorPanelInputNumberTest.modelValue"
          :placeholder="MunchkinCalculatorPanelInputNumberTest.placeholder"
          :min="MunchkinCalculatorPanelInputNumberTest.min"
          :max="MunchkinCalculatorPanelInputNumberTest.max"
          :step="MunchkinCalculatorPanelInputNumberTest.step"
          :style="MunchkinCalculatorPanelInputNumberTest.style"
        />
      </div>
      <!-- /demo MunchkinCalculatorPanelInputNumber -->
      <!-- demo MunchkinCalculatorPanelSelect -->
      <div>
        <h2>MunchkinCalculatorPanelSelect</h2>
        <TestingPropsTable :props="MunchkinCalculatorPanelSelectProps" />
        <MunchkinCalculatorPanelSelect
          v-model="MunchkinCalculatorPanelSelectText.modelValue"
          :placeholder="MunchkinCalculatorPanelSelectText.placeholder"
          :options="MunchkinCalculatorPanelSelectText.options"
        />
        <MunchkinCalculatorPanelSelect
          v-model="MunchkinCalculatorPanelSelectText.modelValue"
          :placeholder="MunchkinCalculatorPanelSelectText.placeholder"
          :options="MunchkinCalculatorPanelSelectText.options"
          :style="MunchkinCalculatorPanelSelectText.style"
        />
      </div>
      <!-- /demo MunchkinCalculatorPanelSelect -->
      <!-- demo MunchkinCalculatorPanel -->
      <div>
        <h2>MunchkinCalculatorPanel</h2>
        <TestingPropsTable
          :props="MunchkinCalculatorPanelProps"
        />
        <div>
          <button
            class="button-default"
            @click="togglePanel"
          >
            Toggle panel
          </button>
        </div>
        <div class="h-[190px]" />
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MunchkinCalculatorPanel
            v-model="MunchkinCalculatorPanelTest"
          />
        </transition>
      </div>
      <!-- /demo MunchkinCalculatorPanel -->
    </template>
  </TestingWrapper>
</template>
