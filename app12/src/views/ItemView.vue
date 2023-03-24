<script setup>
    import { watch, reactive } from 'vue'
    import { useRouter } from 'vue-router';
    import Heading from '../components/Heading.vue'
    import json from '../components/foodList.json'

    const router = useRouter();

    const props = defineProps(['main'])
    const searchedItem = reactive({
        name: "",
        image: "",
        price: "",
        about: "",
    })
    
    function searchEvent(x){
      console.log('hello from itemview')
      console.log('x = ', x)

      //search for item\\
      if(x != ''){
        if(x == json.MRE.name){
          console.log('item found')

          searchedItem.name = json.MRE.name
          searchedItem.image = json.MRE.image
          searchedItem.about = json.MRE.about
          searchedItem.price = json.MRE.price
        }
        else if(x == json.beans.name){
          console.log('item found')

          searchedItem.name = json.beans.name
          searchedItem.image = json.beans.image
          searchedItem.about = json.beans.about
          searchedItem.price = json.beans.price
        }
        else if(x == json.twinkies.name){
          console.log('item found')

          searchedItem.name = json.twinkies.name
          searchedItem.image = json.twinkies.image
          searchedItem.about = json.twinkies.about
          searchedItem.price = json.twinkies.price
        }
        else if(x == json.pb.name){
          console.log('item found')

          searchedItem.name = json.pb.name
          searchedItem.image = json.pb.image
          searchedItem.about = json.pb.about
          searchedItem.price = json.pb.price
        }
        else if(x == json.meat.name){
          console.log('item found')

          searchedItem.name = json.meat.name
          searchedItem.image = json.meat.image
          searchedItem.about = json.meat.about
          searchedItem.price = json.meat.price
        }
        else if(x == json.ramen.name){
          console.log('item found')

          searchedItem.name = json.ramen.name
          searchedItem.image = json.ramen.image
          searchedItem.about = json.ramen.about
          searchedItem.price = json.ramen.price
        }
        else if(x == json.cola.name){
          console.log('item found')

          searchedItem.name = json.cola.name
          searchedItem.image = json.cola.image
          searchedItem.about = json.cola.about
          searchedItem.price = json.cola.price
        }
        else if(x == json.water.name){
          console.log('item found')

          searchedItem.name = json.water.name
          searchedItem.image = json.water.image
          searchedItem.about = json.water.about
          searchedItem.price = json.water.price
        }
        else{
          console.log('item not found')
          router.push('/invalid')
        }

      }
      else{
        console.log('item not found')
        router.push('/invalid')
      }

    }

</script>

<template>
  <body>
    <Heading label="Item" @searching="(x) => searchEvent(x)"/>
    <div id="info">
      <h4>{{ searchedItem.name }}</h4>
      <br>
      {{ searchedItem.price }}
      <br>
      <br>
      {{ searchedItem.about }}
      <img :src="searchedItem.image">
    </div>
  </body>
</template>

<style>
#info{
    background-color: white;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    width: 60%;
    height: 450px;
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