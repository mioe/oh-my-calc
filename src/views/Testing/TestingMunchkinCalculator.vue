<script setup lang="ts">
import { ref, Ref, watch } from 'vue'

const MunchkinCalculatorPanelInputNumberProps: Ref<any> = ref({
  'v-model': 0,
  placeholder: 'Placeholder',
  min: 0,
  max: 10,
  step: 1,
  style: {
    width: '150px',
  },
})

const MunchkinCalculatorPanelSelectProps: Ref<any> = ref({
  'v-model': null,
  placeholder: 'Placeholder',
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

const MunchkinCalculatorPanelProps: Ref<any> = ref(null)
const togglePanel = () => {
  MunchkinCalculatorPanelProps.value = MunchkinCalculatorPanelProps.value === null
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

watch(MunchkinCalculatorPanelProps,
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
          v-model="MunchkinCalculatorPanelInputNumberProps['v-model']"
          :placeholder="MunchkinCalculatorPanelInputNumberProps.placeholder"
          :min="MunchkinCalculatorPanelInputNumberProps.min"
          :max="MunchkinCalculatorPanelInputNumberProps.max"
          :step="MunchkinCalculatorPanelInputNumberProps.step"
          :style="MunchkinCalculatorPanelInputNumberProps.style"
        />
      </div>
      <!-- /demo MunchkinCalculatorPanelInputNumber -->
      <!-- demo MunchkinCalculatorPanelSelect -->
      <div>
        <h2>MunchkinCalculatorPanelSelect</h2>
        <TestingPropsTable :props="MunchkinCalculatorPanelSelectProps" />
        <MunchkinCalculatorPanelSelect
          v-model="MunchkinCalculatorPanelSelectProps['v-model']"
          :placeholder="MunchkinCalculatorPanelSelectProps.placeholder"
          :options="MunchkinCalculatorPanelSelectProps.options"
        />
        <MunchkinCalculatorPanelSelect
          v-model="MunchkinCalculatorPanelSelectProps['v-model']"
          :placeholder="MunchkinCalculatorPanelSelectProps.placeholder"
          :options="MunchkinCalculatorPanelSelectProps.options"
          :style="MunchkinCalculatorPanelSelectProps.style"
        />
      </div>
      <!-- /demo MunchkinCalculatorPanelSelect -->
      <!-- demo MunchkinCalculatorPanel -->
      <div>
        <h2>MunchkinCalculatorPanel</h2>
        <TestingPropsTable
          v-if="MunchkinCalculatorPanelProps"
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
            v-model="MunchkinCalculatorPanelProps"
          />
        </transition>
      </div>
      <!-- /demo MunchkinCalculatorPanel -->
    </template>
  </TestingWrapper>
</template>
