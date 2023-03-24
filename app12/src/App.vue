<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from './components/NavBar.vue'

const main = ref(null)
</script>

<template>
  <body>
    <div id='title'>
      <h1>Uber Eats</h1>
      <h4 id="subtitle"> (Post-Apocalypse Version)</h4>
    </div>

    <Navbar id="Navbar"/>
    <main ref="main">
      <RouterView :main="main"/>
    </main>

  </body>
</template>

<style>
body{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#title{
  display: flex;
  flex-direction: row;
  align-items: baseline;

  background-color: black;
  color:antiquewhite;
  padding-left: 10px;
}
#subtitle{
  color:rgb(255, 168, 80);
  padding-left: 5px;
}
#Navbar{
  border-color: black;
  border-style: solid;
  border-width: 3px;
  padding: 10px;
}
</style>