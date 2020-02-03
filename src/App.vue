<template>
  <v-app>
    <v-app>
      <Layout :title="storedProjects" @clicked="onOpenDialog"/>
      <router-view :key="$route.fullPath"/>
      <Dialog v-if="initDialog" @on-close="onCloseDialog" :title="title" :options="dialogOptions">
        <ProjectList/>
      </Dialog>
    </v-app>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {Layout, Dialog} from './components/commons';
  import ProjectList from "./components/ProjectList";

  export default {
    name: 'App',
    components: {
      Layout,
      Dialog,
      ProjectList,
    },
    computed: {
      ...mapGetters({
        storedProjectTitle: 'getProjectTitle',
        storedProjects: 'getProjects',
      })
    },
    data: () => ({
      initDialog: false,
      title: "Move to Other Projects",
      dialogOptions: {
        isShowSelect: true,
        onSelect: Function
      }
    }),
    created() {
      if (!this.storedProjects) this.initDialog = true;
      this.dialogOptions.onSelect = this.onSelect;
    },
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      onCloseDialog() {
        this.initDialog = false;
      },
      onSelect() {
        this.onCloseDialog();
      }
    },
  };
</script>
