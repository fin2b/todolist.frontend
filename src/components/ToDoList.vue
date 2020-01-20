<template>
  <List :items="todos" :on-click-item="onClickItem"/>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {Project} from "../model";
  import {List} from './commons';

  export default {
    props: [],
    components: {
      List,
    },
    computed: {
      ...mapGetters({
        storedProject: 'getProject',
        storedTodoList: 'getTodoList',
      })
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
    }),
    methods: {
      onClickItem(todo) {
        this.$store.commit('setTodo', todo);
      },
    },
  };
</script>
