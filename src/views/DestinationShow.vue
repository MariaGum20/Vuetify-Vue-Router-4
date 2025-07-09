<template>
  <v-container>
  <div class="container">
    <section class="destination">
      <h1>{{ destination.name }} </h1> 
      <div class="destination-details"> <GoBack />
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Beautiful places in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params:{
            id: destination.id,
            slug: destination.slug,
            experienceSlug: experience.slug}}"
        >
          <PlacesCard 
            :experience="experience"
          />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
  </v-container>
</template>

<script>
import sourceData from '@/data.json'
import PlacesCard from '@/components/PlacesCard.vue';
import GoBack from '@/components/GoBack.vue';
export default {
  components:{PlacesCard, GoBack},
  props:{
      id:{type: Number, required: true}
    },
    computed:{
        destination(){
            return sourceData.destinations.find(
              (destination) => destination.id === this.id
            );
        },
    },
}
</script>