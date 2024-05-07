<template>
  <div
    class="relative z-10 flex h-28 flex-col gap-default2 rounded-2xl bg-opacity-80 p-3.5 text-white"
    :class="[cardColor]"
  >
    <span v-if="germanName" class="text-sm font-bold">{{ germanName }}</span>
    <TypeChip v-for="type in types" :key="type.name" :type="getGermanType(type)" />
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
      class="absolute bottom-2 right-0 h-20"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getGermanType } from '@/common/helperFunctions'
import { pkmnApi } from '@/api'
import type { Pokemon, PokemonSpecies, Type } from 'pokenode-ts'
import TypeChip from '@/components/TypeChip.vue'
import PokeballIcon from '@/components/icons/PokeballIcon.vue'

const colorMap = {
  grass: 'bg-grass',
  fire: 'bg-fire',
  water: 'bg-water',
  bug: 'bg-bug',
  normal: 'bg-normal',
  flying: 'bg-flying',
  electric: 'bg-electric',
  poison: 'bg-poison',
  ground: 'bg-ground',
  fairy: 'bg-fairy',
  fighting: 'bg-fighting',
  psychic: 'bg-psychic',
  rock: 'bg-rock',
  ghost: 'bg-ghost',
  ice: 'bg-ice',
  dragon: 'bg-dragon'
}

const props = withDefaults(
  defineProps<{
    pokemon?: Pokemon
    species?: PokemonSpecies
    isLoading?: boolean
  }>(),
  {
    isLoading: false
  }
)

const types = ref<Type[]>([])
onMounted(() => getPokemonTypes())

const cardColor = computed(() => {
  if (props.isLoading || !props.pokemon) return 'bg-gray-300'
  else return colorMap[props.pokemon.types[0].type.name as keyof typeof colorMap] ?? 'bg-black'
})

const germanName = computed(() => {
  if (!props.species) return undefined
  else return props.species.names.find((name) => name.language.name === 'de')?.name
})

const spritesUrl = computed(() => {
  if (!props.pokemon) return undefined
  else return props.pokemon.sprites.other?.['official-artwork'].front_default
})

async function getPokemonTypes() {
  const promises: Promise<Type>[] = []
  if (!props.pokemon) return
  props.pokemon.types.forEach((type) => promises.push(pkmnApi.getTypeByName(type.type.name)))
  types.value = await Promise.all(promises)
}
</script>
