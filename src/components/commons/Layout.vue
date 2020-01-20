<template>
  <v-sheet>
    <v-app-bar max-height="65px">
      <v-app-bar-nav-icon @click="onOpenDialog"/>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <Dialog v-if="initDialog" @on-close="onCloseDialog">
      <ProjectList/>
    </Dialog>
  </v-sheet>
</template>

<script>
  import Dialog from "./Dialog";
  import ProjectList from "./ProjectList";

  export default {
    props: [
      'title',
    ],
    components: {
      Dialog,
      ProjectList,
    },
    data: () => ({
      initDialog: false,
    }),
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      onCloseDialog() {
        this.initDialog = false;
      }
    },
  };
</script>

<style>

</style>
