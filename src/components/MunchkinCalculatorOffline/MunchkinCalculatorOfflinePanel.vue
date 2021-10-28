<script setup lang="ts">
import { computed, ComputedRef, ref, Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
const { t } = useI18n()
const { width, height } = useWindowSize()
const isPortrait: ComputedRef<boolean> = computed(() => width.value >= height.value)
import { useMunchkinCalculatorOfflineStore } from '@/stores/munchkin-calculator-offline'
const store = useMunchkinCalculatorOfflineStore()
const { munchkinRaces, munchkinClasses } = store

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
})

const levelHook: Ref<any> = ref(null)
const gearHook: Ref<any> = ref(null)

const emit = defineEmits([
  'update:modelValue',
  'handle-remove',
  'handle-edit',
  'handle-hide',
])

const onChangeCounter = (event: any ,hook: 'gear' | 'level') => {
  const obj = {
    ...props.modelValue,
    [`${hook}`]: Number(event.target.value),
  }
  emit('update:modelValue', obj)
}

const handleIncrement = (hook: 'gear' | 'level') => {
  if (hook === 'level') {
    levelHook.value.stepUp()
    onChangeCounter({ target: levelHook.value }, 'level')
  } else if (hook === 'gear') {
    gearHook.value.stepUp()
    onChangeCounter({ target: gearHook.value }, 'gear')
  }
}

const handleDecrement = (hook: 'gear' | 'level') => {
  if (hook === 'level') {
    levelHook.value.stepDown()
    onChangeCounter({ target: levelHook.value }, 'level')
  } else if (hook === 'gear') {
    gearHook.value.stepDown()
    onChangeCounter({ target: gearHook.value }, 'gear')
  }
}

const handleSex = (sex: boolean) => {
  const obj = {
    ...props.modelValue,
    currentSex: sex,
  }
  emit('update:modelValue', obj)
}

const isSpecialTabOpen: Ref<boolean> = ref(false)

const handleHide = () => {
  emit('handle-hide')
}


const onChangeSelect = (event: any, hook: 'class' | 'race') => {
  const obj = {
    ...props.modelValue,
    [`${hook}`]: event.target.value !== 'null' ? event.target.value : null,
  }
  emit('update:modelValue', obj)
}
</script>

<template>
  <section
    v-if="modelValue"
    class="fixed z-1 left-0 bg-$document w-full py-[8px] border-t-3 border-$primary space-y-[16px]"
    :style="{
      bottom: isPortrait ? '0px' : '48px'
    }"
  >
    <div class="max-w-[1200px] px-[16px] mx-auto flex items-center justify-between space-x-[8px]">
      <h2 class="block flex-1 w-full truncate font-medium text-[16px]">
        {{ modelValue.name }}
      </h2>
      <div class="space-x-[8px]">
        <button
          class="button-default space-x-[4px]"
          @click="handleHide"
        >
          <icon-carbon:previous-outline />
          <span>
            {{ t('hide') }}
          </span>
        </button>
        <button
          :class="isSpecialTabOpen ? 'button-primary' : 'button-default'"
          @click="isSpecialTabOpen = !isSpecialTabOpen"
        >
          <icon-carbon:accessibility-alt />
        </button>
        <button
          class="button-default"
          @click="emit('handle-edit')"
        >
          <icon-carbon:edit />
        </button>
        <button
          class="button-default"
          @click="emit('handle-remove')"
        >
          <icon-carbon:delete />
        </button>
      </div>
    </div>
    <div v-if="!isSpecialTabOpen" class="max-w-[1200px] h-[118px] px-[16px] mx-auto flex items-start space-x-[16px] justify-between">
      <div class="inline-flex flex-col items-center space-y-[8px]">
        <button
          class="button-default w-full"
          @click="handleIncrement('level')"
        >
          +
        </button>
        <label class="relative flex flex-col max-w-[60px]">
          <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
            {{ t('level') }}
          </span>
          <input
            ref="levelHook"
            type="number"
            min="1"
            max="10"
            step="1"
            :value="modelValue.level"
            class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
            @change="onChangeCounter($event, 'level')"
          >
        </label>
        <button
          class="button-default w-full"
          @click="handleDecrement('level')"
        >
          -
        </button>
      </div>

      <div class="flex-1 w-full flex flex-col space-y-[8px]">
        <div class="w-full flex items-center space-x-[8px]">
          <p class="text-$typography-secondary">
            {{ t('sex') }}:
          </p>
          <button
            :class="modelValue.currentSex === true ? 'button-primary' : 'button-default'"
            @click="handleSex(true)"
          >
            <icon-twemoji:male-sign class="w-[20px] h-[20px]" />
          </button>
          <button
            :class="modelValue.currentSex === false ? 'button-primary' : 'button-default'"
            @click="handleSex(false)"
          >
            <icon-twemoji:female-sign class="w-[20px] h-[20px]" />
          </button>
          <p class="text-$typography-secondary opacity-25 lowercase">
            ({{ modelValue.currentSex ? t('male') : t('female') }})
          </p>
        </div>
        <div class="w-full">
          <label class="relative flex flex-col">
            <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
              {{ t('class') }}
            </span>
            <!-- eslint-disable -->
            <select
              class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
              :value="modelValue.class"
              @change="onChangeSelect($event, 'class')"
            >
              <option value="">{{ t('withoutClass') }}</option>
              <option
                v-for="cls in munchkinClasses"
                :key="cls"
                :value="cls"
              >
                {{ t(cls) }}
              </option>
            </select>
            <!-- eslint-enable -->
          </label>
        </div>
        <div class="w-full">
          <label class="relative flex flex-col">
            <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
              {{ t('race') }}
            </span>
            <!-- eslint-disable -->
            <select
              class="w-full min-h-[32px] px-[10px] pt-[14px] rounded-[4px] bg-$secondary text-[12px] text-center focused"
              :value="modelValue.race"
              @change="onChangeSelect($event, 'race')"
            >
              <option
                v-for="race in munchkinRaces"
                :key="race"
                :value="race"
              >
                {{ t(race) }}
              </option>
            </select>
            <!-- eslint-enable -->
          </label>
        </div>
      </div>

      <div class="inline-flex flex-col items-center space-y-[8px]">
        <button
          class="button-default w-full"
          @click="handleIncrement('gear')"
        >
          +
        </button>
        <label class="relative flex flex-col  max-w-[60px]">
          <span class="absolute top-[4px] left-[50%] transform -translate-x-[50%] text-$typography-secondary text-[11px]">
            {{ t('gear') }}
          </span>
          <input
            ref="gearHook"
            type="number"
            min="0"
            max="99"
            step="1"
            :value="modelValue.gear"
            class="w-full min-h-[37px] px-[10px] pt-[16px] rounded-[4px] bg-$secondary text-[16px] text-center focused"
            @change="onChangeCounter($event, 'gear')"
          >
        </label>
        <button
          class="button-default w-full"
          @click="handleDecrement('gear')"
        >
          -
        </button>
      </div>
    </div>
    <div v-else class="max-w-[1200px] h-[118px] px-[16px] mx-auto space-x-[16px]">
      isSpecialTabOpen: {{ isSpecialTabOpen }}
      # todo
    </div>
  </section>
</template>
