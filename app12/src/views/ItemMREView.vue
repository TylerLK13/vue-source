<script setup>
    import Heading from '../components/Heading.vue'
    import json from '../components/foodList.json'

    const props = defineProps(['main'])
</script>

<template>
  <body>
    <Heading label="MRE"/>
    <div class="item"> 
        <img src="../components/photos/MRE.jpg">
        {{ json.MRE.price }}
        <br>
        {{ json.MRE.about }}
        </div>
  </body>
</template>

<style>
.item{
    background-color: white;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    width: 200px;
    height: 250px;
    padding: 15px;
    margin: 30px;
    text-align: center;

    display: flex;
    align-content: space-between;
    flex-direction: column;
}
img{
    width: 96%;
    height: 68%;
    margin: 5px;
}
</style>