<script setup>
    import { useRouter } from 'vue-router'
    import {reactive} from 'vue'

    const router = useRouter();

    const props = defineProps(['label'])

    const user = reactive({
        search: ""
    });

    function switchEvent(){
        console.log('user.search (ListView): ', user.search);

        router.push('/list/item');
    }

</script>

<template>
    <body>
        <h3>{{ props.label }}</h3>
        <input type="text" placeholder="Search" :value="user.search" v-on:input="event => user.search=event.target.value">
        <input type="button" value="Search" @click="switchEvent(), $emit('searching', user.search)">
        <small>EDIT NOTE: need to push first then input in</small>
</body>
</template>

<style>

</style>