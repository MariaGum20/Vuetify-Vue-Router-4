<template>
  <v-container>
    <div>
      <h1>Greetings, {{ username }}</h1>
      <button @click="logout">Logout</button>
      <router-link :to="{name: 'invoices'}">
        <button>Invoices</button>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
        username: window.user
    }
  },
  methods:{
    logout(){
        window.user = null
        this.$router.push({name: 'Home'})
    }
  }
}
</script>