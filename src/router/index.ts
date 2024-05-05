import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokedexView from '@/views/PokedexView.vue'
import PokemonDetailView from '@/views/PokemonDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/pokemon',
      name: 'Pokedex',
      component: PokedexView
    },
    {
      path: '/pokemon/:pokemonId',
      name: 'PokedexDetail',
      component: PokemonDetailView
    }
  ]
})

export default router
