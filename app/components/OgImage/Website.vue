<script setup lang="ts">
/**
 * @credits Full Stack Heroes <https://fullstackheroes.com/>
 */

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'title'
  }
)
</script>

<template>
  <div
    :style="{
      backgroundImage: 'linear-gradient(350deg, #FF6900, #FFB987, #FFFFFF)'
    }"
    class="h-full w-full flex items-start justify-start"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full p-20">
        <div
          class="flex items-center justify-start gap-3 font-bold text-[50px] text-neutral-800"
        >
          <img
            src="/avatar.png"
            alt="Valentin Chmara"
            class="h-20 w-20"
            width="80"
            height="80"
          >
          <span>Valentin Chmara</span>
        </div>
        <h1 class="text-[60px] text-neutral-800 font-bold text-left">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
