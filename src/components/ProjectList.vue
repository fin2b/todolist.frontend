<template>
  <div class="project">
    <List :items="projects" :onClickItem="onClickItem"/>
    <div class="project-list-create" v-if="storedProjectCurrentType === pageType.CREATE">
      <v-list-item>
        <v-list-item-icon>
          <v-icon v-text="storedProjects.length + 1"/>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="project-list-create-content">
            <v-text-field
              v-model="title"
              dense
              label="project title"
              class="project-list-create-content-field" />
            <v-btn icon color="green" @click="onClickSubmit">
              <v-icon>{{ icons.mdiCheckCircleOutline }}</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { mdiCheckCircleOutline } from '@mdi/js';
  import {List} from "./commons";

  export default {
    components: {
      List,
    },
    props: [
      'projects',
    ],
    computed: {
      ...mapGetters({
        storedCurrentProject: 'getCurrentProject',
        storedProjects: 'getProjects',
        storedProjectCurrentType: 'getProjectCurrentType',
      }),
    },
    data: () => ({
      pageType: {
        RETRIEVE: '조회하기',
        CREATE: '새로 만들기'
      },
      title: '',
      icons: {
        mdiCheckCircleOutline,
      }
    }),
    methods: {
      onClickItem(project) {
        this.$store.commit('setSelectedProject', project);
      },
      onClickSubmit() {
        this.$store.dispatch('asyncSetProject', {title: this.title})
        .then(response => console.log('res', response))
        .then(() => this.$store.commit('setProjectCurrentType', this.pageType.RETRIEVE))
        .then(() => this.$store.dispatch('asyncFindAllProject'))
        .catch(err => console.error(err));
      },
    }
  }
</script>

<style lang="scss">
  .project {
    &-list-create-content {
      display: flex;
      width: 70%;

      &-field {
        margin-right: 10px;
      }
    }
  }
</style>