<template>
  <nav class="relative z-10 flex h-20 justify-between overflow-x-clip px-default">
    <button v-if="props.showArrow" class="rounded-full" @click="() => router.back()">
      <ArrowIcon class="h-4 w-4" />
    </button>
    <button v-if="props.showMenu" class="rounded-full">
      <BurgerIcon class="h-4 w-4" />
    </button>
    <PokeballIcon
      v-if="props.showPokeball"
      class="absolute -right-[128px] -top-[119px] -z-10 h-80 border opacity-10"
      color-code1="#000000"
      color-code2="#000000"
      color-code3="#000000"
      color-code4="#000000"
      color-code5="#00000000"
    />
  </nav>
</template>

<script setup lang="ts">
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'
import router from '@/router'

const props = withDefaults(
  defineProps<{
    showPokeball?: boolean
    showArrow?: boolean
    showMenu?: boolean
  }>(),
  {
    showPokeball: true,
    showArrow: true,
    showMenu: true
  }
)
</script>
