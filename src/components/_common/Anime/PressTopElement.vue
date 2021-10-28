<template>
  <div class="relative overflow-hidden inline-flex flex-col">
    <div class="min-h-30px flex justify-evenly">
      <div class="mi-arrow-up-anime">
        <icon-carbon:arrow-up />
      </div>
      <div class="mi-arrow-up-anime">
        <icon-carbon:arrow-up />
      </div>
      <div class="mi-arrow-up-anime">
        <icon-carbon:arrow-up />
      </div>
    </div>
    <slot />
  </div>
</template>


<style lang="sass">
@keyframes mi-arrow-up-anime
  0%,
  100%
    transform: translateY(0)
  50%
    transform: translateY(10px)

.mi-arrow-up-anime
  animation: mi-arrow-up-anime 1s ease-in-out infinite
  &:nth-child(1)
    animation-delay: .2s
  &:nth-child(2)
    animation-delay: .15s
  &:nth-child(2)
    animation-delay: .1s
</style>
