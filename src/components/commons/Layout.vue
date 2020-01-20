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
  export default {
    props: [
      'title',
    ],
    components: {

    },
    methods: {
      onOpenDialog() {
        this.$emit('clicked');
      },
    },
  };
</script>

<style>

</style>
