<template>
  <nav class="relative z-10 flex h-20 justify-between overflow-x-clip px-default">
    <button v-if="props.leading" class="rounded-full" @click="props.leading.clickFunction">
      <component :is="props.leading.component" class="h-4 w-4" :fill-class="props.leading.color" />
    </button>
    <button v-if="props.trailing" class="rounded-full" @click="props.trailing.clickFunction">
      <component
        :is="props.trailing.component"
        class="h-4 w-4"
        :fill-class="props.trailing.color"
      />
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
import type { Component } from 'vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'

interface AppBarComponent {
  component: Component
  color?: 'fill-white' | 'fill-black'
  clickFunction: () => void
}

const props = withDefaults(
  defineProps<{
    showPokeball?: boolean
    leading?: AppBarComponent
    trailing?: AppBarComponent
  }>(),
  {
    showPokeball: true
  }
)
</script>
