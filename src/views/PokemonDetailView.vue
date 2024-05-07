<template>
  <AppBar
    class="bg-grass bg-opacity-80"
    :leading="{
      component: ArrowIcon,
      color: 'fill-white',
      clickFunction: () => router.back()
    }"
    :trailing="{
      component: BurgerIcon,
      color: 'fill-white',
      clickFunction: () => {}
    }"
  />
  <main class="bg-grass bg-opacity-80 px-default">{{ pokemon?.name }}</main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pkmnApi } from '@/api'
import router from '@/router'
import type { Pokemon } from 'pokenode-ts'
import AppBar from '@/components/AppBar.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import BurgerIcon from '@/components/icons/BurgerIcon.vue'

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
