<template>
  <main class="px-default">
    <h1 class="text-3xl font-bold">Pokédex</h1>
    <div class="mt-default grid grid-cols-2 gap-default">
      <PokedexCard
        v-for="pokemonSpecies in pokemonSpeciesList"
        :key="pokemonSpecies.name"
        :species="pokemonSpecies"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pkmnApi } from '@/api'
import { type PokemonSpecies, type NamedAPIResourceList } from 'pokenode-ts'
import PokedexCard from '@/components/PokedexCard.vue'

const pokemonSpeciesList = ref<PokemonSpecies[]>([])

onMounted(() => fetchAllPokemon())

async function fetchAllPokemon() {
  const pokemonList: NamedAPIResourceList = await pkmnApi.listPokemonSpecies()
  const promises = []
  for (const pkmn of pokemonList.results) {
    promises.push(pkmnApi.getPokemonSpeciesByName(pkmn.name))
  }
  const responses = await Promise.all(promises)
  pokemonSpeciesList.value = pokemonSpeciesList.value.concat(responses)
}
</script>
