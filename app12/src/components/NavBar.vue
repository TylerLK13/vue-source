<script setup>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue';

function testEvent(){
    console.log("This changes everything")
}

const user = reactive({
        search: ""
    });

function switchEvent(){
    console.log('user.search (ListView): ', user.search);
}

</script>

<template>
    <nav>
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/list" class="link">Item List</router-link>
        <router-link to="/invalid" class="link">TEST_Invalid</router-link>
        <router-link to="/list/item" class="link">TEST_Item</router-link>

        <!--input type="text" placeholder="Search" :value="user.search" v-on:input="event => user.search=event.target.value">
        <router-link to="/list/item" class="link">
            <button @click="testEvent(), switchEvent(), $emit('searching', user.search)">
                Search
            </button>
        </router-link-->
    
    </nav>
</template>

<style>
.link{
    padding: 10px;
}
</style>