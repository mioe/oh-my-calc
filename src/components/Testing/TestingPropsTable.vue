<script setup lang="ts">
import { computed } from 'vue'
import { kebabize, sortObjectByKey } from '@/helpers'

const p = defineProps({
  props: {
    type: Object,
    default: null
  },
})

const sortProps = computed(() => sortObjectByKey(p.props))

const beautifyKey = (key: any) => {
  if (key === 'modelValue') { return 'v-model' }
  return kebabize(key)
}
</script>

<template>
  <div v-if="props">
    <h3 class="mb-[4px]">
      Props:
    </h3>
    <table class="ml-[16px]">
      <tr
        v-for="(value, key) in sortProps"
        :key="key"
      >
        <td>
          {{ beautifyKey(key) }}
        </td>
        <td class="pl-[4px]">
          <span class="opacity-50">
            {{ `${ Array.isArray(value) ? value.join(' | ') : value }` }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>
