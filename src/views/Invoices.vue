<template>
    <v-container>
        <div>
            <h1>Invoices</h1>
        </div>
    </v-container>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'
export default {
    setup(){
        onBeforeRouteLeave((to, from)=>{
            const answer = window.confirm(
                'Are you sure you want to leave? Invoices are super awesome!'
            )
            if(!answer) return false
        })
    }
}
</script>