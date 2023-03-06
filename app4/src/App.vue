<template>
  <body  v-bind:class="colorChange">
    <h1>{{ title }}</h1>
    <img :src="pic"/>
    <hr/>

    <button @click="switchSwag()">Switch Swag</button>

    <p>
      {{ para.one }}
    </p>

    <p>
      {{ para.two }}
    </p>
    <p>
      {{ para.three }}
    </p>

  </body>
</template>

<script setup>

  import { ref, reactive } from 'vue'

  const title = ref("reactive");
  title.value = "SWAG PUNCH!!";

  const pic = ref("arm.png");


  const para = reactive({
    one: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Vulputate eu scelerisque felis imperdiet proin fermentum. Amet nisl suscipit adipiscing bibendum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus."
    ,
    two: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar."
    ,
    three: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Suspendisse faucibus interdum posuere lorem ipsum dolor."
  });

  const colorChange = ref("color1")
  function switchSwag(){
    colorChange.value = (colorChange.value == 'color1') ? "color2" : "color1"
    pic.value = (pic.value == "arm.png") ? "leg.png" : "arm.png";
    title.value = (title.value == "SWAG PUNCH!!") ? "SWAG KICK!!" : "SWAG PUNCH!!" ;
  }

</script>

<style>
body{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
img{
  width: 200px;
  height: 300px;
}
.color1{
  color: rgb(0, 0, 0);
  background-color: white;
}
.color2{
  color: rgb(255, 255, 255);
  background-color: black;
}
</style>