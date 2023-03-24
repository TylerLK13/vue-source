<script setup>
  import Heading from '../components/Heading.vue'

  const props = defineProps(['main'])
</script>

<template>
  <body>
    <Heading label="Home"/>
    <img src="../components/photos/wallpaper.jpg">
  </body>
</template>

<style>
img{
  width: 100%;
}
</style>