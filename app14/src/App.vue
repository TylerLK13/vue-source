<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
    <!--body>
      <h1>app 14</h1-->
      <main id="gridContainer">
        <RouterView name="BoxView1" class="b1"/>
        <RouterView name="BoxView2" class="b2"/>
        <RouterView name="BoxView3" class="b3"/>
        <RouterView name="BoxView4" class="b4"/>
        <RouterView name="BoxView5" class="b5"/>
        <RouterView name="BoxView6" class="b6"/>
      </main>
    <!--/body-->
</template>

<style>
#gridContainer{
  display: grid;
  grid-template-areas: 
    'b1 b1 b1 b1 b1 b1 b1 b1 b1'
    'b2 b2 b2 b3 b3 b3 b3 b3 b3'
    'b4 b4 b4 b4 b4 b4 b5 b5 b5'
    'b6 b6 b6 b6 b6 b6 b6 b6 b6';
  gap: 0px;
  flex-grow: 1;

  padding: 10px;
  background-color: rgb(24, 227, 246);
}

#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 20px
}

.b1{
  grid-area: b1;
  background-color: rgb(204, 255, 0);
}
.b2{
  grid-area: b2;
  background-color: blueviolet;
}
.b3{
  grid-area: b3;
  background-color: brown;
}
.b4{
  grid-area: b4;
  background-color: blanchedalmond;
}
.b5{
  grid-area: b5;
  background-color: orange;
}
.b6{
  grid-area: b6;
  background-color: green;
}

</style>