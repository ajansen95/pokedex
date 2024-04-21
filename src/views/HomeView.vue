<template>
  <main class="px-7">
    <h1 class="text-3xl font-bold">What Pokemon<br />are you looking for?</h1>
    <SearchBar />
    <div class="grid grid-cols-2 gap-2">
      <CategoryCard
        v-for="category in categories"
        :key="category.title"
        :title="category.title"
        :color="category.color"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import CategoryCard from '@/components/CategoryCard.vue'

interface Category {
  title: string
  color: string
}

const categories: Category[] = [
  {
    title: 'Pokédex',
    color: 'bg-teal-500'
  },
  {
    title: 'Moves',
    color: 'bg-red-500'
  },
  {
    title: 'Abilities',
    color: 'bg-blue-500'
  },
  {
    title: 'Items',
    color: 'bg-yellow-500'
  },
  {
    title: 'Locations',
    color: 'bg-purple-500'
  },
  {
    title: 'Type Charts',
    color: 'bg-amber-800'
  }
]
</script>
