<template>
  <nav class="relative z-10 flex h-20 justify-between overflow-x-clip px-default">
    <button v-if="props.leading" class="rounded-full" @click="props.leading.clickFunction">
      <component :is="props.leading.component" class="h-4 w-4" />
    </button>
    <button v-if="props.trailing" class="rounded-full" @click="props.trailing.clickFunction">
      <component :is="props.trailing.component" class="h-4 w-4" />
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
import PokeballIcon from '@/components/icons/PokeballIcon.vue'
import type { Component } from 'vue'

interface AppBarComponent {
  component: Component
  clickFunction: () => void
}

const props = withDefaults(
  defineProps<{
    showPokeball?: boolean
    leading?: AppBarComponent
    trailing?: AppBarComponent
  }>(),
  {
    showPokeball: true,
    showArrow: true,
    showMenu: true
  }
)
</script>
