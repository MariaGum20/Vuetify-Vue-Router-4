<template>
    <v-container>
        <div id="nav">
            <AppLink id="logo" to="/">Vue Countries App</AppLink>
            <AppLink 
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
            >
                {{ destination.name }}
            </AppLink>
            <AppLink :to="{name: 'protected'}">Dashbroad</AppLink>
            <AppLink to="https://github.com/MariaGum20">Author site</AppLink>
        </div>
    </v-container>
</template>

<script>
import sourceData from '@/data.json'
import AppLink from './AppLink.vue';
export default {
    data(){
        return {
            destinations: sourceData.destinations
        }   
    }
}
</script>


<style lang="css">
    #nav .vue-countries-active-link{
        color: red;
        border-bottom: 2px solid red;
    }
</style>