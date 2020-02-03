<template>
  <v-sheet>
    <v-app-bar max-height="65px">
      <v-app-bar-nav-icon @click="onOpenDialog"/>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer/>
      <v-btn icon color="primary" @click="onClickAdd">
        <v-icon>{{ icons.mdiPlus }}</v-icon>
      </v-btn>
      <v-btn icon color="primary" @click="onClickCheck">
        <v-icon>{{ icons.mdiCheckCircleOutline }}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-sheet>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { mdiPlus, mdiCheckCircleOutline } from '@mdi/js';

  export default {
    props: [
      'title',
    ],
    computed: {
      ...mapGetters({
        storedTodoCurrentType: 'getTodoCurrentType',
      })
    },
    data: () => ({
      pageType: {
        RETRIEVE: '조회하기',
        CREATE: '새로 만들기',
        CHECK: '체크하기'
      },
      icons: {
        mdiPlus,
        mdiCheckCircleOutline,
      }
    }),
    methods: {
      onOpenDialog() {
        if (this.storedTodoCurrentType !== this.pageType.RETRIEVE) {
          this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
        }
        this.$emit('clicked');
      },
      onClickAdd() {
        this.$store.commit('setTodoCurrentType', this.pageType.CREATE);
      },
      onClickCheck() {
        this.$store.commit('setTodoCurrentType', this.pageType.CHECK);
      }
    },
  };
</script>

<style>

</style>
