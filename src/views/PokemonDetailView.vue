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
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { pkmnApi } from '@/api'
import router from '@/router'
import type { PokemonSpecies } from 'pokenode-ts'
import AppBar from '@/components/AppBar.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'

const props = withDefaults(
  defineProps<{
    pokemonName: string
  }>(),
  {}
)

onMounted(() => fetchPokemonDetails())

const pokemon = ref<PokemonSpecies>()

const germanName = computed(
  () => pokemon.value?.names.find((name) => name.language.name === 'de')?.name
)

async function fetchPokemonDetails() {
  pokemon.value = await pkmnApi.getPokemonSpeciesByName(props.pokemonName)
}
</script>
