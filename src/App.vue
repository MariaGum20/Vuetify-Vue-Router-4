<template>
  <v-app>
    <TheNavigation />

    <v-container>
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </v-container>
    
    <v-footer app>
      <v-container class="text-center">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>

<style lang="css">
  .slide-enter-active,
  .slide-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: translateX(-30%);
  }
</style>