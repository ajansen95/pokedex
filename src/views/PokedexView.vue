<template>
  <main class="px-default">
    <h1 class="text-3xl font-bold">Pokédex</h1>
    <div class="mt-default grid grid-cols-2 gap-default">
      <PokedexCard v-for="n in 5" :key="n" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from 'vue'
import { pkmnApi } from '@/api'
import type { NamedAPIResourceList } from 'pokenode-ts'
import PokedexCard from '@/components/PokedexCard.vue'

const pokemonList = ref<NamedAPIResourceList>()

onMounted(() => fetchAllPokemon())

async function fetchAllPokemon() {
  pokemonList.value = await pkmnApi.listPokemons()
  console.log(toRaw(pokemonList.value))
}
</script>
