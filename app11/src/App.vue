<script setup>
import {provide} from 'vue'
import Container from './components/container.vue'


provide(
  'text',
  'This exact text that you are reading was provided using "provide" and "inject" from vue. In my App.vue, i used provide(ITEM_NAME, ITEM_MESSAGE). And in my nested component I used inject(ITEM_NAME) with {{ITEM_NAME}}'
)

</script>

<template>
  <body>
    <div class="boxed">
      <h1>App 11</h1>
      <Container/>
    </div>
  </body>
</template>

<style>
.boxed{
  border-style: solid;
  border-width: 2px;
  border-color: black;
  width: 400px;
  height: 400px;
  margin: 20px;
  padding: 10px;
  text-align: center;
}
</style>