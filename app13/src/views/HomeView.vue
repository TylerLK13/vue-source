<script setup>
import { useInfoStore } from '../stores/info.js'

const store = useInfoStore();

let nameFirst = store.nameFirst;
let nameLast = store.nameLast;
let street = store.street;
let city = store.city;
let state = store.state;
let zip = store.zip;

</script>

<template>
  <main>
    <h1>Home</h1>

    <div id="infoContainer">
    <h4 id="name">
    Name: {{ nameLast }}, {{ nameFirst }}
    </h4>

    <br>
    
    <small id="address">
      Address: {{ street }}, {{ city }}, {{ state }}, {{ zip }}
    </small>
    </div>
  </main>
</template>

<style>
#infoContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  padding: 12px;
  width: 300px;
}

</style>