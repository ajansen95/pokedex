<template>
  <nav class="p-default relative flex justify-between overflow-x-clip">
    <PokeballIcon
      v-if="props.showPokeball"
      class="absolute -right-[124px] -top-[123px] -z-10 h-80 border opacity-10"
      color-code1="#000000"
      color-code2="#000000"
      color-code3="#000000"
      color-code4="#000000"
      color-code5="#00000000"
    />
    <button class="rounded-full" @click="() => router.back()">
      <ArrowIcon class="h-4 w-4" />
    </button>
    <button class="rounded-full">
      <BurgerIcon class="h-4 w-4" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'
import router from '@/router'

const props = withDefaults(
  defineProps<{
    showPokeball: boolean
  }>(),
  {
    showPokeball: true
  }
)
</script>
