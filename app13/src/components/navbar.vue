<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/Edit">Edit</router-link>
    </nav>
</template>

<style>
nav{
    display: flex;
    justify-content: space-evenly;
}
</style>