<template>
  <v-sheet>
    <v-app-bar max-height="65px">
      <v-app-bar-nav-icon @click="onOpenDialog"/>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
  </v-sheet>
</template>

<script>
  import {mapGetters} from 'vuex';
  import pageType from "../../util/pageType";

  export default {
    props: [
      'title',
    ],
    computed: {
      ...mapGetters({
        storedTodoCurrentType: 'getTodoCurrentType',
      })
    },
    components: {

    },
    data: () => ({
      pageType,
    }),
    methods: {
      onOpenDialog() {
        if (this.storedTodoCurrentType !== pageType.RETRIEVE) {
          this.$store.commit('setTodoCurrentType', pageType.RETRIEVE);
        }
        this.$emit('clicked');
      },
    },
  };
</script>

<style>

</style>
