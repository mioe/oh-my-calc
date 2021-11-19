<script setup lang="ts">
import { ref, Ref, nextTick, onMounted, onBeforeUnmount, computed, ComputedRef } from 'vue'

const props = defineProps({
  menuStyles: {
    type: Object,
    default: () => ({
      padding: '8px',
      maxHeight: '260px',
    }),
  },
  positionX: {
    type: String,
    default: 'left',
    validator: (x: string) => ['right', 'left'].includes(x),
  },
  positionY: {
    type: String,
    default: 'bottom',
    validator: (x: string) => ['top', 'bottom'].includes(x),
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
  document.addEventListener('click', handleClickAway)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickAway)
})

const isOpen: Ref<boolean> = ref(false)
const localPositionX: Ref<string> = ref(props.positionX)
const localPositionY: Ref<string> = ref(props.positionY)

const toggle = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      checkRePositionX()
      checkRePositionY()
    })
  }
}

const checkRePositionX = () => {
  const overflow = getOverflow()
  if (props.positionX === 'right' && overflow.right) {
    localPositionX.value = 'left'
  }
  else if (props.positionX === 'left' && overflow.left) {
    localPositionX.value = 'right'
  }
  else {
    resetPositionX()
  }
}

const checkRePositionY = () => {
  const overflow = getOverflow()
  if (props.positionY === 'top' && overflow.top) {
    localPositionY.value = 'bottom'
  }
  else if (props.positionY === 'bottom' && overflow.bottom) {
    localPositionY.value = 'top'
  }
  else {
    resetPositionY()
  }
}

const headerHook: Ref<Element | null> = ref(null)
const menuHook: Ref<Element | null> = ref(null)

const getOverflow = () => {
  const menuRect = menuHook.value?.getBoundingClientRect() || { bottom: 0, top: 0, left: 0, right: 0 }
  const spacingX = 40
  const spacingY = 80

  return {
    left: menuRect.right + spacingX > window.innerWidth,
    right: menuRect.left - spacingX < 0,
    bottom: menuRect.bottom + spacingY > window.innerHeight,
    top: menuRect.top - spacingY < 0,
  }
}

const resetPositionX = () => {
  localPositionX.value = props.positionX
}

const resetPositionY = () => {
  localPositionY.value = props.positionY
}

const resetPositions = () => {
  resetPositionX()
  resetPositionY()
}

const handleClickAway = (ev: any) => {
  const shouldClose = props.keepOnContentClick
    ? !menuHook.value?.contains(ev.target)
    : true
  if (!headerHook.value?.contains(ev.target) && shouldClose) {
    isOpen.value = false
  }
}

const stateClasses: ComputedRef<any> = computed(() => {
  const positionXClass = `position-${localPositionX.value}`
  const positionYClass = `position-${localPositionY.value}`
  return {
    [positionXClass]: true,
    [positionYClass]: true,
    'is-open': isOpen.value,
    'is-disabled': props.disabled,
  }
})

const flipYPositionForTransform: ComputedRef<string> = computed(() =>
  localPositionY.value === 'bottom'
    ? 'top'
    : 'bottom',
)
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
      @after-leave="resetPositions"
    >
      <div
        v-show="isOpen"
        ref="menuHook"
        role="menu"
        class="mi-dropdown--menu absolute z-2 min-w-[160px] rounded-[4px] bg-$secondary overflow-x-hidden overflow-y-auto"
        :style="{
          transformOrigin: `${localPositionX} ${flipYPositionForTransform}`,
          boxShadow: '0 22px 70px 4px rgba(0, 0, 0, 0.56)',
          ...menuStyles,
        }"
      >
        <slot name="menu" :transformOrigin="{ localPositionX ,localPositionY }" />
      </div>
    </transition>
  </div>
</template>

<style lang="sass">
.mi-dropdown
  &:not(.position-top)
    .mi-dropdown--menu
      top: calc(100% + 10px)
  &.position-top
    .mi-dropdown--menu
      top: -10px
      transform: translateY(-100%)
  &.position-right
    .mi-dropdown--menu
      right: 0
</style>
