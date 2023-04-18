<script setup>
import {reactive} from 'vue';

const dice = reactive({
  amount: 0,
  dare: '',
  total: '',
  visual: '',
  counter: 0
});

const visual = reactive({
  text: ''
})

/*
const position = reactive({
  y: 0
})

function onMouseMove(event){
  position.y = event.pageY;
}
*/

//////randomNum//////

function randomNum(top){
  let num = Math.ceil(Math.random() * top);
  dice.amount += num;
  console.log("Rolled ", num, "from d", top);
  console.log("Total: ", dice.amount)
}


//////dice types//////

function rollD4(){
  randomNum(4)
}
function rollD6(){
  randomNum(6)
}
function rollD8(){
  randomNum(8);
}
function rollD10(){
  const num = Math.floor(Math.random() * 10);
  dice.amount += num;
  console.log("Rolled ", num, "from d10");
  console.log("Total: ", dice.amount);
}
function rollD10s(){
  const num = Math.floor(Math.random() * 10);
  dice.amount += (num * 10);
  console.log("Rolled ", num * 10, "from d10s");
  console.log("Total: ", dice.amount);
}
function rollD12(){
  randomNum(12);
}
function rollD20(){
  randomNum(20);
}
function flipCoin(){
  let num = Math.ceil(Math.random() * 2);
  
  if(num == 1){
    dice.dare += ' + heads'
  }
  if(num == 2){
    dice.dare += ' + tails'
  }
}
function rollD1(){
  dice.amount += 1;
  console.log("Total: ", dice.amount);
}
function rollDMill(){
  randomNum(1000000);
}
function rollD20Weighted(){
  let num = Math.ceil(Math.random() * 20);
  let numFinal = 0;

  if(num < 5){
    numFinal = num + 8;
  }
  if(num >= 5 && num < 10){
    numFinal = num + 6;
  }
  if(num >= 10 && num < 15){
    numFinal = num + 4;
  }
  if(num >=15 && num < 19){
    numFinal = num + 2;
  }
  if(num == 19 ){
    numFinal = num + 1;
  }

  dice.amount += numFinal;
  console.log("Rolled ", num, "d20");
  console.log("Weighted: ", numFinal);
  console.log("Total: ", dice.amount);
}
function rollParty(){
  let num = Math.ceil(Math.random() * 6);

  if(num == 1){
    dice.dare += ' + Everyone takes drinks'
  }
  if(num == 2){
    dice.dare += ' + Choose someone to drink'
  }
  if(num == 3){
    dice.dare += ' + Drink 1'
  }
  if(num == 4){
    dice.dare += ' + Drink 2'
  }
  if(num == 5){
    dice.dare += ' + All guys drink'
  }
  if(num == 6){
    dice.dare += ' + All gals drink'
  }
  
  console.log("Rolled ", num, "from party die");
  console.log("Dare: ", dice.dare);
}


//////add dice//////

function addDice(dieType){
  if(dice.counter > 0){
    visual.text += ', '
  }

  visual.text += dieType;
  dice.counter++;
}



//////roll and clear//////

function rollDice(){
  if(visual.text != ''){
    dice.total = dice.amount + dice.dare
    console.log("Dice rolled");
  }
}

function clear(){
  if(visual.text == ''){
    dice.total = '';
  }

  dice.amount = 0;
  dice.dare = '';
  //dice.total = '';
  visual.text = '';
  dice.counter = 0;

  console.log("Dice cleared");
}

</script>

<template>
  <!--main @mousemove="onMouseMove()" :style="{backgroundColor: 'hsl(80%, ${y}, 50%)'}"-->
  <main>
    <h1>Dice Roller</h1>
    <div id="selector">

      <h3>Select Dice</h3>

      <input type="button" id="d4Butt" value="Add d4" @click="rollD4(), addDice('d4')">
      <input type="button" id="d6Butt" value="Add d6" @click="rollD6(), addDice('d6')">
      <input type="button" id="d8Butt" value="Add d8" @click="rollD8(), addDice('d8')">
      <input type="button" id="d10Butt" value="Add d10" @click="rollD10(), addDice('d10')">
      <input type="button" id="d10sButt" value="Add d10s" @click="rollD10s(), addDice('d10s')">
      <input type="button" id="d12Butt" value="Add d12" @click="rollD12(), addDice('d12')">
      <input type="button" id="d20Butt" value="Add d20" @click="rollD20(), addDice('d20')">

      <br>

      <input type="button" id="coinButt" value="Add coin" @click="flipCoin(), addDice('coin')">
      <input type="button" id="d1Butt" value="Add d1" @click="rollD1(), addDice('d1')">
      <input type="button" id="d1milButt" value="Add 1,000,000" @click="rollDMill(), addDice('d1000000')">
      <input type="button" id="d20WeightButt" value="Add d20 (Weighted)" @click="rollD20Weighted(), addDice('d20')">
      <input type="button" id="partyButt" value="Add party die" @click="rollParty(), addDice('party')">

    </div>
    <div id="visual">

      <h3>Dice Selected</h3>
      
      <!--div id="diceContainer">
        {{ dice.visual }}
      </div-->

      <div id="diceContainer" >
        <TransitionGroup id="group" name="fade">
          <div v-for="item in visual" :key="item">
            {{ item }}
          </div>
        </TransitionGroup>
      </div>
    
    </div>

    <input type="button" value="Roll" @click="rollDice()">

    <div id="summary">

      <h3>Total</h3>

      {{ dice.total }}

    </div>

    <input type="button" value="Clear" @click="clear()">

  </main>
</template>

<style>
html{
  font-family: cursive;
  background-color: rgb(44, 46, 55);
  color:rgb(217, 222, 228)
}
main{
  transition: 0.1s background-color ease;
}
div{
  text-align: center;
}
h1{
  font-weight: bold;
  font-style: italic;
}
#diceContainer{
  
  border-style: solid;
  border-color: rgb(141, 255, 255);
  border-radius: 30px;
  margin: 0 auto;
  padding: 5px;
  min-height: 70px;
  width:auto;
  max-width: 600px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

input{
  margin: 3px;
  padding: 5px;
  border-color: rgb(141, 255, 255);
  border-radius: 4px;
  color: rgb(217, 222, 228);
  background-color: rgb(67, 70, 81);
  font-family: cursive;
}
main{
  background-color: rgb(67, 70, 81);
  padding:20px;
  border-radius: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0, 0, 0, 0);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translateY(10px);
  color:aqua;
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>