<template>
  <div
    class="relative z-10 flex h-28 flex-col gap-default2 rounded-2xl bg-grass bg-opacity-80 p-3.5 text-white"
  >
    <span class="text-sm font-bold">{{ germanName }}</span>
    <TypeChip type="Grass" />
    <TypeChip type="Poison" />
    <PokeballIcon
      class="absolute -bottom-3.5 -right-4 h-24 opacity-30"
      color-code1="#FFFFFF"
      color-code2="#FFFFFF"
      color-code3="#FFFFFF"
      color-code4="#FFFFFF"
      color-code5="#FFFFFF00"
    />
  </div>
</template>

<script setup lang="ts">
import TypeChip from '@/components/TypeChip.vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'
import type { PokemonSpecies } from 'pokenode-ts'
import { computed } from 'vue'

const germanName = computed(
  () => props.species.names.find((name) => name.language.name === 'de')?.name
)

const props = withDefaults(
  defineProps<{
    species: PokemonSpecies
  }>(),
  {}
)
</script>
