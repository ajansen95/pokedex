<template>
  <main class="px-default">{{ pokemon?.name }}</main>
</template>

<script setup lang="ts">
import { pkmnApi } from '@/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Pokemon } from 'pokenode-ts'

const route = useRoute()
const pokemon = ref<Pokemon>()

onMounted(() => fetchPokemonDetails())

async function fetchPokemonDetails() {
  if (route.params.pokemonId)
    pokemon.value = await pkmnApi.getPokemonById(Number(route.params.pokemonId))
}
</script>
