<template>
    <v-container>
        <div class="card">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <span class="card_text">
                {{ experience.name }}
            </span>
        </div>
    </v-container>
</template>

<script>
export default {
    props:{
        experience:{type: Object, required: true,}
    }
}
</script>