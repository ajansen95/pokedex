<template>
  <AppBar :show-arrow="true" :show-menu="true" class="bg-grass bg-opacity-80" />
  <main class="bg-grass bg-opacity-80 px-default">{{ pokemon?.name }}</main>
</template>

<script setup lang="ts">
import { pkmnApi } from '@/api'
import { onMounted, ref } from 'vue'
import type { Pokemon } from 'pokenode-ts'
import AppBar from '@/components/AppBar.vue'

const props = withDefaults(
  defineProps<{
    pokemonName: string
  }>(),
  {}
)

const pokemon = ref<Pokemon>()

onMounted(() => fetchPokemonDetails())

async function fetchPokemonDetails() {
  pokemon.value = await pkmnApi.getPokemonByName(props.pokemonName)
}
</script>
