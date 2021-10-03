<script setup lang="ts">
import { computed, ComputedRef, defineProps, ref, Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
const { t } = useI18n()
const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)

defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
})

const levelHook: Ref<any> = ref(null)
const gearHook: Ref<any> = ref(null)

const emit = defineEmits([
  'handle-remove',
  'handle-edit',
  'handle-hide',
])

const handleIncrement = (hook: 'gear' | 'level') => {
  if (hook === 'level') {
    levelHook.value.stepUp()
  } else if (hook === 'gear') {
    gearHook.value.stepUp()
  }
}

const handleDecrement = (hook: 'gear' | 'level') => {
  if (hook === 'level') {
    levelHook.value.stepDown()
  } else if (hook === 'gear') {
    gearHook.value.stepDown()
  }
}
</script>

<template>
  <section
    v-if="munchkin"
    class="fixed z-1 left-0 bg-$document w-full py-[8px] px-[16px] border-t-3 border-$primary space-y-[16px]"
    :style="{
      bottom: isPortrait ? '0px' : '48px'
    }"
  >
    <div class="flex items-center justify-between space-x-[8px]">
      <h2 class="block flex-1 w-full truncate font-medium text-[16px]">
        {{ munchkin.name }}
      </h2>
      <div class="space-x-[8px]">
        <button
          class="space-x-[4px]"
          @click="emit('handle-hide')"
        >
          <icon-carbon:previous-outline />
          <span>
            {{ t('hide') }}
          </span>
        </button>
        <button
          @click="emit('handle-hide')"
        >
          <icon-carbon:accessibility-alt />
        </button>
        <button
          @click="emit('handle-edit')"
        >
          <icon-carbon:edit />
        </button>
        <button
          @click="emit('handle-remove')"
        >
          <icon-carbon:delete />
        </button>
      </div>
    </div>
    <div class="flex items-start space-x-[16px] justify-between">
      <div class="inline-flex flex-col items-center space-y-[8px]">
        <button
          class="w-full"
          @click="handleIncrement('level')"
        >
          +
        </button>
        <label class="relative flex flex-col max-w-[60px]">
          <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
            Level
          </span>
          <input
            ref="levelHook"
            type="number"
            min="1"
            max="10"
            step="1"
            :value="munchkin.level"
            class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
          >
        </label>
        <button
          class="w-full"
          @click="handleDecrement('level')"
        >
          -
        </button>
      </div>

      <div class="flex-1 w-full flex flex-col space-y-[8px]">
        <div class="w-full flex items-center space-x-[8px]">
          <p class="text-$typography-secondary">
            Sex:
          </p>
          <button
            :style="{
              backgroundColor: `var(${munchkin.currentSex === true
                ? '--primary' : '--secondary'})`,
            }"
          >
            <icon-twemoji:male-sign class="w-[20px] h-[20px]" />
          </button>
          <button
            :style="{
              backgroundColor: `var(${munchkin.currentSex === false
                ? '--primary' : '--secondary'})`,
            }"
          >
            <icon-twemoji:female-sign class="w-[20px] h-[20px]" />
          </button>
          <p class="text-$typography-secondary opacity-25">
            ({{ munchkin.currentSex ? 'male' : 'female' }})
          </p>
        </div>
        <div class="w-full">
          <label class="relative flex flex-col">
            <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
              Class
            </span>
            <select class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused">
              <option :value="null">Нет класса</option>
            </select>
          </label>
        </div>
        <div class="w-full">
          <label class="relative flex flex-col">
            <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
              Race
            </span>
            <select class="w-full min-h-[32px] px-[10px] pt-[14px] rounded-[4px] bg-$secondary text-[12px] text-center focused">
              <option :value="null">Нет рассы</option>
            </select>
          </label>
        </div>
      </div>

      <div class="inline-flex flex-col items-center space-y-[8px]">
        <button
          class="w-full"
          @click="handleIncrement('gear')"
        >
          +
        </button>
        <label class="relative flex flex-col  max-w-[60px]">
          <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
            Gear
          </span>
          <input
            ref="gearHook"
            type="number"
            min="0"
            max="99"
            step="1"
            :value="munchkin.gear"
            class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
          >
        </label>
        <button
          class="w-full"
          @click="handleDecrement('gear')"
        >
          -
        </button>
      </div>
    </div>
  </section>
</template>
