<script setup>
import {inject} from 'vue'

const text = inject('text')

</script>

<template>
  <div class="boxed3">
    <h3>Box</h3>
    <p>
        {{ text }}
    </p>
  </div>
</template>

<style>
.boxed3{
  border-style: solid;
  border-width: 2px;
  border-color: rgb(162, 162, 162);
  width: 338px;
  height: 210px;
  padding: 10px;
}
</style>