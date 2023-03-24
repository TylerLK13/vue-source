<script setup>
  import Heading from '../components/Heading.vue'

  const props = defineProps(['main'])
</script>

<template>
  <body>
    <h3>Home</h3>
    <img src="../components/photos/wallpaper.jpg">
  </body>
</template>

<style>
img{
  width: 100%;
}
</style>