<template>
  <v-container>
    {{ storedTodo }}
  </v-container>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters({
        storedTodo: 'getTodo'
      })
    },
    methods: {},
    date: () => ({})
  }
</script>
