<template>
  <section class="testing-wrapper space-y-[24px]">
    <header>
      <h1>
        <slot name="header" />
      </h1>
    </header>

    <slot />

    <footer class="flex justify-end">
      <p class="text-[12px] text-$typography-secondary opacity-25">
        TestingWrapper.vue
      </p>
    </footer>
  </section>
</template>

<style lang="sass">
.testing-wrapper
  @for $i from 1 through 6
    h#{$i}::before
      content: str-slice('######', 1, -7 + $i)
      @apply text-$primary
  & > div
    @apply space-y-[8px]
</style>
