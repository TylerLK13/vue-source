<script setup>
import {ref} from 'vue'

const open = ref(true);
const show = ref(false);
const roll = ref(false);

const dice = ['One','Two','Three','Four','Five','Six'];

const newRoll = ref('')

function rollDice(){
  
  const randoNum = Math.floor(Math.random() * 6);
  console.log(randoNum);

  const x = dice[randoNum];
  //console.log(x);

  newRoll.value = x;
  console.log(newRoll.value);

}

</script>

<template>
  <main>
    <h1>app15</h1>

    <div id="transitionContainer">

      <div class="test">
        <button @click="open = !open">Fade</button>
        <br>
        <transition name="fade">
          <img id="rocket" v-if="open" src="rocket.png">
        </transition>
      </div>

      <div class="test">
        <button @click="show = !show">Nested toggle</button>
        <br>
        <Transition duration="8000" name="nested">
          <div id="b1" v-if="show">
            <div id="b2">
              <div id="b3">
                <div id="b4">

                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="test">
        <button @click="rollDice(), roll= !roll">Roll Dice</button>
        <br>
        <Transition name="dice">
          <div v-if="roll">
            {{ newRoll }}
          </div>
        </Transition>
      </div>

    </div>

  </main>
</template>

<style>
main{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

#rocket{
  width: 100px;
  height: 180px;
}

#transitionContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;


  background-color: rgb(185, 183, 180);
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;

  width: 100%;
  padding: 10px;
}

.test{
  background-color: rgb(229, 229, 229);
  border-color: black;
  border-style: solid;
  border-radius: 7px;
  border-width: 2px;
  height: 200px;
  width: 100px;
  align-content: center;

  padding: 10px;
  margin: 10px;
}


.fade-enter-active{
  transition: all 1s ease-out;
}
.fade-leave-active {
  transition: all 4s cubic-bezier(1, 1, 1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform:  translateY(-200px);
}


#b1{
  width: 80px;
  height: 80px;
  background-color: rgb(41, 0, 68);
  margin: 10px;
}

#b2{
  width: 60px;
  height: 60px;
  background-color: rgb(65, 0, 108);
  margin: 10px;

}

#b3{
  width: 40px;
  height: 40px;
  background-color: rgb(97, 2, 161);
  margin: 10px;
}

#b4{
  width: 20px;
  height: 20px;
  background-color: rgb(124, 0, 206);
  margin: 10px;
}


.nested-enter-active, 
.nested-leave-active {
	transition: all 1s;
}


.nested-enter-from,
.nested-leave-to {
  transform: scale(0.1);
  transform: translate3d(20px, 20px, 0px);
  opacity: 0;
}

.nested-leave-active #b2{
  transition-delay: 2s;
}

.nested-enter-active #b2,
.nested-leave-active #b2{
  transition: all 2s ease-in-out;
}

.nested-enter-from #b2,
.nested-leave-to #b2 {
  transform: scale(0.1);
  transform: translate3d(20px, 20px, 0px);
  opacity: 0;
}

.nested-leave-active #b3{
  transition-delay: 3s;
}

.nested-enter-active #b3,
.nested-leave-active #b3{
  transition: all 4s ease-in-out;
}

.nested-enter-from #b3,
.nested-leave-to #b3 {
  transform: scale(0.1);
  transform: translate3d(20px, 20px, 0px);
  opacity: 0;
}


.nested-leave-active #b4{
  transition-delay: 5s;
}

.nested-enter-active #b4,
.nested-leave-active #b4{
  transition: all 5s ease-in-out;
}

.nested-enter-from #b4,
.nested-leave-to #b4 {
  transform: scale(0.1);
  transform: translate3d(20px, 20px, 0px);
  opacity: 0;
}


.dice-enter-active,
.dice-leave-active {
  transition: opacity 1s ease;
  /*
  transform: translate3d(20px, 20px, 0px);
  transform: scale(2);
  */
}
.dice-enter-from,
.dice-leave-to {
  opacity: 0;
}

</style>