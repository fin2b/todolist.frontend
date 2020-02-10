<template>
  <v-app>
    <Layout v-if="storedProjects" :title="storedCurrentProjectTitle" @clicked="onOpenDialog"/>
    <router-view :key="$route.fullPath"/>
    <Dialog v-if="initDialog" @on-close="!!!initDialog" :title="title" :btn="btn" :onClickBtn="onClickBtn">
      <ProjectList :projects="storedProjects" />
    </Dialog>
    <Dialog v-if="storedProjectCurrentType === this.pageType.CREATE" @on-close="!!!initDialog" :title="title"
            :btn="btnWhenCreate" :onClickBtn="onClickBtnWhenCreate">
      <ProjectList :projects="storedProjects"/>
    </Dialog>
  </v-app>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
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
        storedSelectedProject: 'getSelectedProject',
        storedCurrentProjectTitle: 'getCurrentProjectTitle',
        storedProjectCurrentType: 'getProjectCurrentType',
      }),
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
      this.onClickBtn.push(this.onSelectProject, this.onCreate);
      this.onClickBtnWhenCreate.push(this.onCancel);
      this.$store.dispatch('asyncFindAllProject');
    },
    methods: {
      onOpenDialog() {
        this.initDialog = true;
      },
      onSelectProject() {
        this.$router.push({name: 'home', params: {id: this.storedSelectedProject.id}})
          .then(() => this.$store.commit('setCurrentProject', this.storedSelectedProject))
          .then(() => this.initDialog = false)
          .catch(err => {
            if (err.name === "NavigationDuplicated")
              return {};
            console.error(err);
          })
      },
      onCreate() {
        if (this.pageType.RETRIEVE) {
          return this.$store.commit('setProjectCurrentType', this.pageType.CREATE);
        }
      },
      onCancel() {
        if (this.pageType.CREATE) {
          return this.$store.commit('setProjectCurrentType', this.pageType.RETRIEVE);
        }
      }
    },
  };
</script>
