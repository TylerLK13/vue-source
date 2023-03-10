<script setup>

defineProps(['cardName','cardLevel','cardHealth','cardDamage'])

</script>

<template>
  <body>
    <div id="form">
    <h3>Form</h3>

    <div id="infomation">
      <input id="inputName" :value="cardName" @input="$emit('update:cardName', $event.target.value)" type="text" placeholder="Player Name">
      <input id="inputLevel" :value="cardLevel" @input="$emit('update:cardLevel', $event.target.value)" type="number" min="1" max="10" placeholder="Level #">
      <br>
      <br>
      <input id="inputHealth" :value="cardHealth" @input="$emit('update:cardHealth', $event.target.value)" type="number" min="5" max="40" placeholder="Health">
      <input id="inputDamage" :value="cardDamage" @input="$emit('update:cardDamage', $event.target.value)" type="number" min="1" max="10" placeholder="Power">
      <hr>
    </div>

    <input type="button" value="Add" @click=" $emit('addCard')">
    </div>
  </body>
</template>

<style>
  #form{
    border-width: 3px;
    border-color: orange;
    border-style: solid;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
  }
</style>