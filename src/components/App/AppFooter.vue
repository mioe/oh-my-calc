<script setup lang="ts">

</script>

<template>
  <footer class="sticky bottom-0 left-0 z-2 w-full h-[48px] mt-auto px-[8px] space-x-[8px] flex items-center justify-between bg-$document">
    <router-link
      :to="{name: 'Home'}"
      class="font-medium"
    >
      OhMy<span class="text-$primary">Calc</span>
    </router-link>

    <div class="flex-1 w-full flex justify-end items-center space-x-[8px]">
      <WindowSizeButton />
      <OnlineStatusButton />
      <LocaleButton />
      <DarkModeButton />
    </div>
  </footer>
</template>
