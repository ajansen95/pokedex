<template>
  <div
    class="w-min rounded-2xl bg-white bg-opacity-20 text-xs font-bold"
    :class="[paddings, fontWeight]"
  >
    {{ props.type }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type: string
    size?: 'sm' | 'lg'
  }>(),
  {
    size: 'sm'
  }
)

// eslint-disable-next-line vue/return-in-computed-property
const paddings = computed(() => {
  switch (props.size) {
    case 'sm':
      return ['px-2.5', 'py-1']
    case 'lg':
      return ['px-4', 'py-1.5']
  }
})

// eslint-disable-next-line vue/return-in-computed-property
const fontWeight = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'font-normal'
    case 'lg':
      return 'font-bold'
  }
})
</script>
