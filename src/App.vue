<template>
  <v-app>
    <v-app>
      <Layout :title="storedProjectTitle" @clicked="onOpenDialog"/>
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
      if (!this.storedProjectTitle) this.initDialog = true;
      this.dialogOptions.onSelect = this.onSelect;
    },
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      onCloseDialog() {
        console.log('onclosedialog');
        this.initDialog = false;
      },
      onSelect() {
        console.log('select');
        this.onCloseDialog();
      }
    },
  };
</script>
