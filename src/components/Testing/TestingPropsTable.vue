<script setup lang="ts">
defineProps({
  props: {
    type: Object,
    default: null
  },
})
</script>

<template>
  <div v-if="props">
    <h3 class="mb-[4px]">
      Props:
    </h3>
    <table class="ml-[16px]">
      <tr
        v-for="(value, key) in props"
        :key="key"
      >
        <td>{{ key }}</td>
        <td><span class="opacity-50">{{ `${value}` }}</span></td>
      </tr>
    </table>
  </div>
</template>
