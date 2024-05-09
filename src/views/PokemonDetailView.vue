<template>
  <div class="flex h-full flex-col">
    <AppBar
      class="bg-opacity-80"
      :class="cardColor"
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
    <main class="flex flex-1 flex-col bg-opacity-80 px-default text-white" :class="cardColor">
      <h1 class="text-4xl font-bold">{{ germanName }}</h1>
      <span class="self-end text-lg font-bold">#{{ formatPokemonId(pokemon?.id) }}</span>
      <div class="flex gap-2">
        <TypeChip v-for="type in types" :key="type.name" :type="getGermanType(type)" size="lg" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getGermanType, formatPokemonId, colorMap } from '@/common/helperFunctions'
import { pkmnApi } from '@/api'
import router from '@/router'
import type { Pokemon, PokemonSpecies, Type } from 'pokenode-ts'
import AppBar from '@/components/AppBar.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import TypeChip from '@/components/TypeChip.vue'

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

const cardColor = computed(() => {
  if (pokemon.value) return colorMap[pokemon.value.types[0].type.name as keyof typeof colorMap]
  else return 'bg-black'
})

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
