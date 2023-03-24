<script setup>
    import Heading from '../components/Heading.vue'
    import json from '../components/foodList.json'
    import { reactive } from 'vue'

    //const imageTest = ref('../components/photos/MRE.jpg')
    
    const props = defineProps(['main'])
  
</script>

<template>
  <body>
    <Heading label="List"/>
    <!--input type="text" placeholder="Search" :value="user.search" v-on:input="event => user.search=event.target.value">
    <input type="button" value="Search" @click="testEvent(), $emit(user.search)"-->
    <div id="itemList">

        <div class="item">
            {{ json.MRE.name }} 
            <img src="../components/photos/MRE.jpg">
            {{ json.MRE.price }}
            <br>
            {{ json.MRE.about }}
        </div>

        <div class="item">
            {{ json.beans.name }} 
            <img src="../components/photos/beans.jpg">
            {{ json.beans.price }}
            <br>
            {{ json.beans.about }}
        </div>

        <div class="item">
            {{ json.twinkies.name }} 
            <img src="../components/photos/twinkies.jpg">
            {{ json.twinkies.price }}
            <br>
            {{ json.twinkies.about }}
        </div>

        <div class="item">
            {{ json.pb.name }} 
            <img src="../components/photos/pb.jpg">
            {{ json.pb.price }}
            <br>
            {{ json.pb.about }}
        </div>

        <div class="item">
            {{ json.meat.name }} 
            <img src="../components/photos/meat.jpg">
            {{ json.meat.price }}
            <br>
            {{ json.meat.about }}
        </div>

        <div class="item">
            {{ json.ramen.name }} 
            <img src="../components/photos/ramen.jpg">
            {{ json.ramen.price }}
            <br>
            {{ json.ramen.about }}
        </div>

        <div class="item">
            {{ json.cola.name }} 
            <img src="../components/photos/cola.jpg">
            {{ json.cola.price }}
            <br>
            {{ json.cola.about }}
        </div>

        <div class="item">
            {{ json.water.name }} 
            <img src="../components/photos/water.jpg">
            {{ json.water.price }}
            <br>
            {{ json.water.about }}
        </div>

    </div>
  </body>
</template>

<style>
#itemList{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 100%
}
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