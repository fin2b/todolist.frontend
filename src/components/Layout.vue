<template>
  <v-sheet>
    <v-app-bar max-height="65px">
      <v-app-bar-nav-icon @click="onOpenDialog"/>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <Dialog v-if="initDialog" @event-close="eventCloseDialog"/>
  </v-sheet>
</template>

<script>
  import Dialog from "./Dialog";

  export default {
    props: [
      'title',
    ],
    components: {
      Dialog,
    },
    data: () => ({
      initDialog: false,
    }),
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      eventCloseDialog() {
        this.initDialog = false;
      }
    },
  };
</script>

<style>

</style>
