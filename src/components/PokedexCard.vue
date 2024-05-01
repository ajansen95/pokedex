<template>
  <div
    class="relative z-10 flex h-28 flex-col gap-default2 rounded-2xl bg-opacity-80 p-3.5 text-white"
    :class="[cardColor]"
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
    <img
      v-if="spritesUrl"
      :src="spritesUrl"
      alt="pokemon_img"
      class="absolute bottom-2 right-1 h-16"
    />
  </div>
</template>

<script setup lang="ts">
import TypeChip from '@/components/TypeChip.vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'
import type { Pokemon, PokemonSpecies } from 'pokenode-ts'
import { computed } from 'vue'

const colorMap = {
  grass: 'bg-grass',
  fire: 'bg-fire',
  water: 'bg-water',
  bug: 'bg-bug',
  normal: 'bg-stone-700',
  flying: 'bg-blue-300',
  electro: 'bg-yellow-500'
}

const cardColor = computed(
  () => colorMap[props.pokemon.types[0].type.name as keyof typeof colorMap] ?? 'bg-black'
)

const germanName = computed(
  () => props.species.names.find((name) => name.language.name === 'de')?.name
)

const spritesUrl = computed(() => props.pokemon.sprites.other?.['official-artwork'].front_default)

const props = withDefaults(
  defineProps<{
    pokemon: Pokemon
    species: PokemonSpecies
  }>(),
  {}
)
</script>
