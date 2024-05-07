<template>
  <AppBar
    class="bg-grass bg-opacity-80"
    :leading="{
      component: ArrowIcon,
      color: 'fill-white',
      clickFunction: () => router.back()
    }"
    :trailing="{
      component: HeartIcon,
      color: 'fill-white',
      clickFunction: () => {}
    }"
  />
  <main class="bg-grass bg-opacity-80 px-default text-white">
    <h1 class="text-4xl font-bold">{{ germanName }}</h1>
    <TypeChip v-for="type in types" :key="type.name" :type="getGermanType(type)" />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { pkmnApi } from '@/api'
import router from '@/router'
import type { Pokemon, PokemonSpecies, Type } from 'pokenode-ts'
import AppBar from '@/components/AppBar.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import TypeChip from '@/components/TypeChip.vue'
import { getGermanType } from '@/common/helperFunctions'

const props = withDefaults(
  defineProps<{
    pokemonName: string
  }>(),
  {}
)

onMounted(async () => {
  await fetchPokemon()
  await fetchPokemonSpecies()
  await getPokemonTypes()
})

const pokemon = ref<Pokemon>()
const pokemonSpecies = ref<PokemonSpecies>()
const types = ref<Type[]>([])

const germanName = computed(
  () => pokemonSpecies.value?.names.find((name) => name.language.name === 'de')?.name
)

async function fetchPokemon() {
  pokemon.value = await pkmnApi.getPokemonByName(props.pokemonName)
}

async function fetchPokemonSpecies() {
  pokemonSpecies.value = await pkmnApi.getPokemonSpeciesByName(props.pokemonName)
}

async function getPokemonTypes() {
  const promises: Promise<Type>[] = []
  if (!pokemon.value) return
  pokemon.value.types.forEach((type) => promises.push(pkmnApi.getTypeByName(type.type.name)))
  types.value = await Promise.all(promises)
}
</script>
