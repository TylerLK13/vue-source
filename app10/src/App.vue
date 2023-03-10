<script setup>
  import {reactive, ref} from 'vue'
  import infoForm from './components/infoForm.vue'
  import cardParent from './components/cardChild.vue'

  function testConsole(){
    console.log("This is a test")
  }

  let cardNameRef = ref('')
  let cardLevelRef = ref('')
  let cardHealthRef = ref('')
  let cardDamageRef = ref('')

  const cardInfo = [];

  function addCard(){
    console.log("adding card...")

    cardInfo[0] = cardNameRef.value;
    cardInfo[1] = cardLevelRef.value;
    cardInfo[2] = cardHealthRef.value;
    cardInfo[3] = cardDamageRef.value;

    console.log(cardInfo)
  }

</script>

<template>
<body>
  <h1>App 10</h1>
  <div class="container">
    <cardParent>

    </cardParent>

    <infoForm
      v-model:cardName="cardNameRef"
      v-model:cardLevel="cardLevelRef"
      v-model:cardHealth="cardHealthRef"
      v-model:cardDamage="cardDamageRef"
      @addCard="addCard()"      
    />
  </div>
</body>
</template>

<style>
.container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>