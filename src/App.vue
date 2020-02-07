<template>
  <v-app>
    <Layout v-if="storedProjects" :title="storedCurrentProjectTitle" @clicked="onOpenDialog"/>
    <router-view :key="$route.fullPath"/>
    <Dialog v-if="initDialog" @on-close="onCloseDialog" :title="title" :btn="btn" :onClickBtn="onClickBtn">
      <ProjectList :projects="storedProjects" @onClickSelect="onCheckIsSelected"/>
    </Dialog>
    <Dialog v-if="storedProjectCurrentType === this.pageType.CREATE" @on-close="onCloseDialog" :title="title"
            :btn="btnWhenCreate" :onClickBtn="onClickBtnWhenCreate">
      <ProjectList :projects="storedProjects"/>
    </Dialog>
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
      selectedProject: {},
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
      onCloseDialog() {
        this.initDialog = false;
      },
      onCheckIsSelected(project) {
        console.log('before check isSelected');
        console.log(project);
        this.selectedProject = project;
      },
      onSelectProject() {
        console.log('onselect');
        console.log(this.selectedProject);
        this.$router.push({name: 'home', params: {id: this.selectedProject.id}})
          .then(() => this.$store.commit('setCurrentProject', this.selectedProject))
          .then(() => this.onCloseDialog)
          .catch(err => {
            if (err.name === "NavigationDuplicated")
              return {};
            console.error(err);
          })
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
