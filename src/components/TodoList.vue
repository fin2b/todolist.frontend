<template>
  <List :items="todos" :on-click-item="onClickItem"/>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {Project} from "../model";
  import {List} from './commons';
  import pageType from '../util/pageType';

  export default {
    components: {
      List,
    },
    computed: {
      ...mapGetters({
        storedProject: 'getProject',
        storedTodoList: 'getTodoList',
        storedTodoCurrentType: 'getTodoCurrentType',
      }),
    },
    created() {
      this.todos = this.storedTodoList;
      console.log('todos', this.todos);
      this.$store.dispatch('asyncSetProject', Project.findById(this.$route.params.id - 1))
        .then(() => this.$store.commit('setTodoList', this.storedProject.todos))
        .then(() => this.todos = this.storedTodoList);
    },
    data: () => ({
      todos: [],
      pageType
    }),
    methods: {
      onClickItem(todo) {
        if (this.storedTodoCurrentType !== pageType.RETRIEVE) {
          this.$store.commit('setTodoCurrentType', pageType.RETRIEVE);
        }
        this.$store.commit('setTodo', todo);
      },
    }
  }
</script>