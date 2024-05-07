<template>
  <AppBar />
  <main class="bg-black bg-opacity-10">
    <section id="categories" class="rounded-b-3xl bg-white px-default pb-default2">
      <h1 class="text-3xl font-bold">What Pokemon<br />are you looking for?</h1>
      <SearchBar class="mt-10" />
      <div class="mt-10 grid grid-cols-2 gap-default">
        <CategoryCard
          @click="() => (category.route ? router.push({ name: category.route }) : () => {})"
          v-for="category in categories"
          :key="category.title"
          :title="category.title"
          :color="category.color"
        />
      </div>
    </section>
    <section id="news" class="px-default pb-20">
      <header class="mb-4 mt-default flex items-baseline justify-between">
        <h2 class="text-2xl font-bold">Pokémon News</h2>
        <button class="text-sm font-bold text-blue-500">View All</button>
      </header>
      <div class="divide flex flex-col divide-y divide-black divide-opacity-10">
        <NewsPreview
          v-for="news in pokemonNews"
          :key="news.title"
          :title="news.title"
          :date="news.date"
          :imgUrl="news.imgUrl"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import router from '@/router'
import AppBar from '@/components/AppBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import NewsPreview from '@/components/NewsPreview.vue'
import CategoryCard from '@/components/CategoryCard.vue'

interface Category {
  title: string
  color: string
  route?: string
}

const categories: Category[] = [
  {
    title: 'Pokédex',
    color: 'bg-grass',
    route: 'Pokedex'
  },
  {
    title: 'Moves',
    color: 'bg-fire'
  },
  {
    title: 'Abilities',
    color: 'bg-water'
  },
  {
    title: 'Items',
    color: 'bg-electric'
  },
  {
    title: 'Locations',
    color: 'bg-poison'
  },
  {
    title: 'Type Charts',
    color: 'bg-ground'
  }
]

interface PokemonNews {
  title: string
  date: Date
  imgUrl: string
}

const pokemonNews: PokemonNews[] = [
  {
    title: 'Pokémon Rumble Rush Arrives Soon',
    date: new Date('May 15, 2019 03:24:00'),
    imgUrl:
      'https://www.pokemon.com/static-assets/content-assets/cms2-de-de/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg'
  },
  {
    title: 'Detective Pikachu Sleuths join Pokémon GO',
    date: new Date(),
    imgUrl:
      'https://images.cgames.de/images/gsgp/290/detective-pikachu-birth-of-a-new-combination_2733996.jpg'
  },
  {
    title: 'Pokémon Rumble Rush Arrives Soon',
    date: new Date('May 15, 2019 03:24:00'),
    imgUrl:
      'https://www.pokemon.com/static-assets/content-assets/cms2-de-de/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg'
  }
]
</script>
