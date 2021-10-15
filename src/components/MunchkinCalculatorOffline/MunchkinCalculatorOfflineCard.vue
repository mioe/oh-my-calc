<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  munchkin: {
    type: Object,
    default: null,
  },
  isFocus: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'handle-focus',
])

const handleClick = ():void => {
  emit('handle-focus', props.munchkin)
}
</script>

<template>
  <!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
  <div
    class="bg-$secondary rounded-[4px] cursor-pointer flex items-center px-[16px] py-[8px] space-x-[8px]"
    :style="{
      boxShadow: isFocus ? '0 0 0 .2rem var(--primary)' : 'none'
    }"
    @click="handleClick()"
  >
    <div class="w-[20px]">
      <p
        class="font-medium text-[16px] truncate"
        :class="{'text-$primary': munchkin.level > 6}"
      >
        {{ munchkin.level }}
      </p>
    </div>
    <div class="w-[20px]">
      <icon-twemoji:male-sign v-if="munchkin.currentSex" class="w-[20px] h-[20px]" />
      <icon-twemoji:female-sign v-else class="w-[20px] h-[20px]" />
    </div>
    <div class="w-full max-w-[calc(100vw-202px)] space-y-[4px]">
      <p class="truncate font-medium">
        {{ munchkin.name }}
      </p>
      <div class="text-$typography-secondary">
        {{
          [munchkin.class, munchkin.race].filter(e => e).length > 0
            ? [munchkin.class, munchkin.race].filter(e => e).map(e => t(e)).join(' / ')
            : t('human')
        }}
      </div>
    </div>
    <div class="w-[30px]">
      <p
        class="font-medium text-[16px] text-right truncate"
      >
        {{ munchkin.gear }}
      </p>
    </div>
    <div class="w-[30px]">
      <p
        class="font-medium text-[16px] text-$primary text-right truncate"
      >
        {{ munchkin.level + munchkin.gear }}
      </p>
    </div>
  </div>
  <!-- eslint-enable vuejs-accessibility/click-events-have-key-events -->
</template>
