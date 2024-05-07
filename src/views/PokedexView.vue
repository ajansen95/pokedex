<template>
  <AppBar :show-arrow="true" :show-menu="true" />
  <main class="px-default">
    <h1 class="text-3xl font-bold">Pokédex</h1>

    <div class="mt-default grid grid-cols-2 gap-default" v-if="isLoading">
      <PokedexCard v-for="index in 20" :key="index" :is-loading="isLoading" class="animate-pulse" />
    </div>

    <div class="mt-default grid grid-cols-2 gap-default" v-if="!isLoading">
      <PokedexCard
        v-for="(pokemonSpecies, index) in pokemonSpeciesList"
        :key="pokemonSpecies.name"
        :pokemon="pokemonList[index]"
        :species="pokemonSpecies"
        :is-loading="isLoading"
        @click="
          () => {
            router.push({
              name: 'PokedexDetail',
              params: { pokemonName: pokemonSpecies.name }
            })
          }
        "
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pkmnApi } from '@/api'
import router from '@/router'
import { type PokemonSpecies, type NamedAPIResourceList, type Pokemon } from 'pokenode-ts'
import PokedexCard from '@/components/PokedexCard.vue'
import AppBar from '@/components/AppBar.vue'

const isLoading = ref(true)
const pokemonList = ref<Pokemon[]>([])
const pokemonSpeciesList = ref<PokemonSpecies[]>([])

onMounted(async () => {
  isLoading.value = true
  const pokemonListed: NamedAPIResourceList = await pkmnApi.listPokemons(0, 10)
  pokemonList.value = pokemonList.value.concat(await Promise.all(fetchAllPokemon(pokemonListed)))
  pokemonSpeciesList.value = pokemonSpeciesList.value.concat(
    await Promise.all(fetchAllPokemonSpecies(pokemonListed))
  )
  isLoading.value = false
})

function fetchAllPokemon(pokemonListed: NamedAPIResourceList): Promise<Pokemon>[] {
  const promisesPokemon: Promise<Pokemon>[] = []
  for (const pkmn of pokemonListed.results) {
    promisesPokemon.push(pkmnApi.getPokemonByName(pkmn.name))
  }
  return promisesPokemon
}

function fetchAllPokemonSpecies(pokemonListed: NamedAPIResourceList): Promise<PokemonSpecies>[] {
  const promisesSpecies: Promise<PokemonSpecies>[] = []
  for (const pkmn of pokemonListed.results) {
    promisesSpecies.push(pkmnApi.getPokemonSpeciesByName(pkmn.name))
  }
  return promisesSpecies
}
</script>
