<script setup lang="ts">
import { ref, Ref, nextTick, onMounted, onBeforeUnmount, computed, ComputedRef } from 'vue'

const props = defineProps({
  transformOrigin: {
    type: String,
    default: 'left top',
  },
  position: {
    type: String,
    default: 'bottom',
    validator: (x: string) => ['top', 'bottom'].indexOf(x) !== -1,
  },
  maxHeight: {
    type: [Number, String],
    default: 260,
  },
  keepOnContentClick: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  document.addEventListener('click', handleClickaway)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickaway)
})

const isOpen: Ref<boolean> = ref(false)
const localPosition: Ref<string> = ref(props.position)

const toggle = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      checkRePosition()
    })
  }
}

const checkRePosition = () => {
  const overflow = getOverflow()
  if (props.position === 'top' && overflow.top) {
    localPosition.value = 'bottom'
  }
  else if (props.position === 'bottom' && overflow.bottom) {
    localPosition.value = 'top'
  }
  else {
    resetPosition()
  }
}

const headerHook: Ref<Element | null> = ref(null)
const menuHook: Ref<Element | null> = ref(null)

const getOverflow = () => {
  const menuRect = menuHook.value?.getBoundingClientRect() || { bottom: 0, top: 0 }
  const spacing = 40

  return {
    bottom: menuRect.bottom + spacing > window.innerHeight,
    top: menuRect.top - spacing < 0,
  }
}

const resetPosition = () => {
  localPosition.value = props.position
}

const handleClickaway = (ev: any) => {
  const shouldClose = props.keepOnContentClick
    ? !menuHook.value?.contains(ev.target)
    : true
  if (!headerHook.value?.contains(ev.target) && shouldClose) {
    isOpen.value = false
  }
}

const stateClasses: ComputedRef<any> = computed(() => {
  const positionClass = `position-${localPosition.value}`
  return {
    [positionClass]: true,
    'is-open': isOpen.value,
    'is-disabled': props.disabled,
  }
})
</script>

<template>
  <div
    class="mi-dropdown relative inline-block"
    :class="stateClasses"
  >
    <header ref="headerHook">
      <slot name="header" :toggle="toggle" />
    </header>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
      @after-leave="resetPosition"
    >
      <div
        v-show="isOpen"
        ref="menuHook"
        role="menu"
        class="mi-dropdown--menu absolute z-2 min-w-[160px] p-[18px] rounded-[4px] bg-$secondary overflow-x-hidden overflow-y-auto"
        :style="{
          transformOrigin,
          maxHeight: maxHeight + 'px',
          boxShadow: '0 22px 70px 4px rgba(0, 0, 0, 0.56)',
        }"
      >
        <slot name="menu" />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="sass">
.mi-dropdown
  &.position-top
    .mi-dropdown--menu
      top: 0
      transform: translateY(-100%)
</style>
