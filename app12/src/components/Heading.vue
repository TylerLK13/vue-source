<script setup>
    import { RouterLink } from 'vue-router'
    import {reactive} from 'vue'

    const props = defineProps(['label'])

    const user = reactive({
        search: ""
    });

    function switchEvent(){
        console.log('user.search (ListView): ', user.search);
    }

</script>

<template>
    <body>
        <h3>{{ props.label }}</h3>
        <input type="text" placeholder="Search" :value="user.search" v-on:input="event => user.search=event.target.value">
        <router-link to="/list/item" class="link">
            <button @click="switchEvent(), $emit('searching', user.search)">
                Search
            </button>
        </router-link>
        <small>EDIT NOTE: need to push first then input in</small>
        <!--input type="text" placeholder="Search" :value="user.search" v-on:input="event => user.search=event.target.value">
        <input type="button" value="Search" @click="switchEvent(), $emit('searching', user.search)"-->
    </body>
</template>

<style>

</style>