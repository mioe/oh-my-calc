<script setup lang="ts">
import { ref, Ref } from 'vue'

const MunchkinCalculatorPanelProps: Ref<any> = ref(null)
const togglePanel = () => {
  MunchkinCalculatorPanelProps.value = MunchkinCalculatorPanelProps.value === null
    ? {
      name: 'Wwwwwwwwwwwwwwwwwwwwwwwww',
    }
    : null
}
</script>

<template>
  <TestingWrapper>
    <template #header>
      TestingMunchkinCalculatorElements
    </template>
    <template #default>
      <!-- demo MunchkinCalculatorPanel -->
      <div>
        <h2>
          MunchkinCalculatorPanel
        </h2>
        <div>
          <button
            class="button-default"
            @click="togglePanel"
          >
            Toggle panel
          </button>
        </div>
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
