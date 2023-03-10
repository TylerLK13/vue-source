<script setup>
import {ref, watch, watchEffect} from 'vue'
import app from '../App.vue'
import infoForm from './infoForm.vue'

watch( () =>{
  console.log("change detected")
})

function placeCard(){
  console.log("Placing card...")
}

</script>

<template>
  <body>
    <div id="information">
      <h3>Informaion</h3>

      <li v-for="({cardInfo}, cardNameRef) in app">
        {{ cardInfo }}
      </li>

      <input type="button" @click="placeCard()">

    </div>
  </body>
</template>

<style>
    #information{
    border-width: 3px;
    border-color: orange;
    border-style: solid;
    border-radius: 10px;
    padding: 20px;
    width: 500px;
    padding-bottom: 41px;
  }
  #cardHolder{
    display: flex;
    flex-wrap: wrap;
  }
</style>