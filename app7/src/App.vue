<template>
  <body id="body">
    <h1>Buildings from Pexels</h1>
    
    <input id="buttonPrev" @click="prevImg" type="button" value="<">
    <input id="buttonNext" @click="nextImg" type="button" value=">">
    <br>
    <img :src="photo.url">
    <br>
    <div id="photoUrl">
      Photographer: <a :href="photo.photographer_url" target="_blank"> {{ photo.photographer }}</a>
    </div>
  </body>
</template>

<script setup>
  import {ref,reactive} from 'vue'
  import {createClient} from 'pexels'
  import {watch} from 'vue'
  import {onMounted} from 'vue'

  //const client = createClient('j8tTYgTw0oEXeNSHWVLSBcWENX58knoPryAB0vSnuMKFqIYXYhTxjqlm')

  const collection = reactive({
    media: {},
  })

  //new images
  const img1 = reactive({
    name: "", 
    photographer: "Timur Saglambilek", 
    photographer_url: "https://www.pexels.com/@marketingtuig/", 
    url: "img1.jpg"
  })

  const img2 = reactive({
    name: "", 
    photographer: "Scott Webb", 
    photographer_url: "https://www.pexels.com/@scottwebb/", 
    url: "img2.jpg"
  })
  
  const img3 = reactive({
    name: "", 
    photographer: "SevenStorm JUHASZIMRUS", 
    photographer_url: "https://www.pexels.com/@sevenstormphotography/", 
    url: "img3.jpg"
  })

  const photoSet = [img1, img2, img3];
  /////////


  const photo = reactive({
    name: "",
    photographer: "",
    photographer_url: "",
    url: ""
  })

  watch(collection, () => {
    console.log("collection changed")
    if(collection.media.length > 0){
      loadImage()
    }
  })


  /*
  onMounted(() => {
    console.log("onmounted")
    getCollection()
  })
  */

  /*
  async function getCollection(){
    //gets meta-data from the collections
    let result = await client.collections.all({per_page: 1})

    //gets id of the first
    const id = result.collections[0].id

    //gets media for collection
    result = await client.collections.media({id, type: 'photos', per_page: 8})

    //cache media meta-data
    collection.media = result.media
  }
  */

  var index = 0;

  /*
  async function loadImage(){
    photo.title = collection.media[index].alt
    photo.photographer = collection.media[index].photographer
    photo.photographer_url = collection.media[index].photographer_url
    photo.url = collection.media[index].src.tiny
  }
  */

  //new loadImage
  function loadImage(){
    photo.title = photoSet[index].title;
    photo.photographer = photoSet[index].photographer;
    photo.photographer_url = photoSet[index].photographer_url;
    photo.url = photoSet[index].url;
  }

  function nextImg(){
    if(index < 2){
      index++;
      console.log("Pic index: ", index)
      document.querySelector('#buttonPrev').disabled = false;
      loadImage();
      if(index == 2){
        document.querySelector('#buttonNext').disabled = true;
      }
    }
  }

  function prevImg(){
    if(index > 0){
      index--;
      document.querySelector('#buttonNext').disabled = false;
      console.log("Pic index: ", index)
      loadImage();
      if(index == 0){
        document.querySelector('#buttonPrev').disabled = true;
      }
    }
  }

  loadImage();
</script>



<style>
html{
  background-image: linear-gradient(rgb(255, 255, 255), rgb(158, 158, 158));
  background-attachment: fixed;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

input[type=button]{
  border-color: rgb(0, 0, 0);
  border-width: 3px;
  border-radius: 100px;
  border-style: solid;
  padding: px;
  background-color: rgb(196, 196, 196);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  margin-bottom: 5px;
}

#buttonNext{
  float: right;
  margin-right: 200px;
}

#buttonPrev{
  float: left;
  margin-left: 200px;
}

#photoUrl{
  text-align: center;
}

h1{
  text-align: center;
}

img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 40%;

  border-color: black;
  border-style: solid;
  border-width: 5px;
}
</style>