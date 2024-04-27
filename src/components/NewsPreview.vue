<template>
  <div class="flex py-4">
    <div class="flex flex-1 flex-col justify-center gap-1">
      <h3 class="pr-2.5 text-sm font-bold">{{ props.title }}</h3>
      <span class="text-xs font-bold opacity-30">{{
        props.date.toLocaleString('en-GB', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }}</span>
    </div>
    <img class="h-16 w-28 rounded-2xl object-cover" :src="props.imgUrl" alt="news_img" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  date: Date
  imgUrl: string
}>()
</script>
