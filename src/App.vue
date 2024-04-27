<template>
  <div>
    <AppBar class="z-10" :show-arrow="showArrow" :show-menu="showMenu" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import AppBar from '@/components/AppBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showArrow = computed(() => !(route.name === 'Home'))
const showMenu = computed(() => !(route.name === 'Home'))
</script>
