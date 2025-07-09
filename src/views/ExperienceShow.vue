<template>
    <v-container>
        <section>
            <h1>{{ experience.name }}</h1>
            <img v-if="experience.image && experience.image.trim()" 
            :src="`/images/${experience.image}`" 
            :alt="experience.name">
            <p>{{ experience.description }}</p>
        </section>
    </v-container>
</template>

<script>
import sourceData from '@/data.json'
export default {
    props: {
        id: {type: Number, required: true,},
        experienceSlug: {type: String, required: true,}
    },
    computed: {
        destination() {
            return sourceData.destinations.find(
            destination => destination.id === this.id
            )
    },
    experience() {
        if (!this.destination || !this.destination.experiences) {
            return null
        }

        return this.destination.experiences.find(
            experience => experience.slug === this.experienceSlug
        )
    }
    }
}
</script>