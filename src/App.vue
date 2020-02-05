<template>
  <v-app>
    <v-app>
      <Layout v-if="storedProjects" :title="storedCurrentProjectTitle" @clicked="onOpenDialog"/>
      <router-view :key="$route.fullPath"/>
      <Dialog v-if="initDialog" @on-close="onCloseDialog" :title="title" :btn="btn" :onClickBtn="onClickBtn">
        <ProjectList :projects="storedProjects"/>
      </Dialog>
      <Dialog v-if="storedProjectCurrentType === this.pageType.CREATE" @on-close="onCloseDialog" :title="title" :btn="btnWhenCreate" :onClickBtn="onClickBtnWhenCreate">
        <ProjectList :projects="storedProjects"/>
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
        storedProjects: 'getProjects',
        storedCurrentProjectTitle: 'getCurrentProjectTitle',
        storedProjectCurrentType: 'getProjectCurrentType',
      })
    },
    data: () => ({
      initDialog: false,
      title: "Move to Other Projects",
      pageType: {
        CREATE: '새로 만들기',
        RETRIEVE: '조회하기',
      },
      btn: ['select', 'create'],
      onClickBtn: [],
      btnWhenCreate: ['cancel'],
      onClickBtnWhenCreate: [],
    }),
    created() {
      if (!this.storedCurrentProjectTitle) this.initDialog = true;
      this.onClickBtn.push(this.onSelect, this.onCreate);
      this.onClickBtnWhenCreate.push(this.onCancel);
      this.$store.dispatch('asyncFindAllProject');
    },
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      onCloseDialog() {
        this.initDialog = false;
      },
      onSelect() {
        console.log('onselect');
        this.onCloseDialog();
      },
      onCreate() {
        if (this.pageType.RETRIEVE) {
          console.log('oncreate');
          return this.$store.commit('setProjectCurrentType', this.pageType.CREATE);
        }
      },
      onCancel() {
        if (this.pageType.CREATE) {
          console.log('oncancel');
          return this.$store.commit('setProjectCurrentType', this.pageType.RETRIEVE);
        }
      }
    },
  };
</script>
