<script setup>
    import Heading from '../components/Heading.vue'

    const props = defineProps(['main'])
</script>

<template>
    <body id="invalid">
        <div>
            <h3>404 - FILE NOT FOUND</h3>
            Item was not found from seach. Please input proper item name that was listed.  
        </div>
    </body>
</template>

<style>
#invalid{
    background-color: rgb(249, 54, 54);
    padding: 20px;
    margin: 8px;
}
</style>