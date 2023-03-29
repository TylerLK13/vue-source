<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useInfoStore} from '../stores/info.js'

const router = useRouter();
const store = useInfoStore();

let nameFirstEdit = ref("Joe")
let nameLastEdit = ref("Deez")
let streetEdit = ref("255 State St")
let cityEdit = ref("Boston")
let stateEdit = ref("MA")
let zipEdit = ref("02109")

function submit(){
    console.log("submitted info")

    store.nameFirst = nameFirstEdit;
    store.nameLast = nameLastEdit;
    store.street = streetEdit
    store.city = cityEdit;
    store.state = stateEdit;
    store.zip = zipEdit

    router.replace({ path: '/' })

}

</script>

<template>
  <main>
    <h1>Edit</h1>

    <div id="infoContainer">
        <input v-model="nameFirstEdit" type="text" placeholder="First Name"/>
        <input v-model="nameLastEdit" type="text" placeholder="Last Name"/>
        <input v-model="streetEdit" type="text" placeholder="Street Name"/>
        <input v-model="cityEdit" type="text" placeholder="City Name"/>
        <input v-model="stateEdit" type="text" placeholder="State Edit"/>
        <input v-model="zipEdit" type="text" placeholder="Zip Code"/>
    </div>
    <button type="button" @click="submit">Submit Information</button>
  </main>
</template>

<style>
input{
    padding: 2px;
    margin: 1px;
}
button{
    margin: 14px;
    padding: 3px;
}

</style>