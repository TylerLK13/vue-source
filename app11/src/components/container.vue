<script setup>
import Box from './box.vue'

</script>

<template>
  <body>
    <div  class="boxed2">
        <h2>Container</h2>
        <Box/>
    </div>
  </body>
</template>

<style>
.boxed2{
  border-style: solid;
  border-width: 2px;
  border-color: rgb(64, 64, 64);
  width: 362px;
  height: 300px;
  padding: 10px;
}
</style>