<template>
  <v-app>
    <v-row class="row">
      <v-col>
        <todo-list/>
      </v-col>
      <v-divider inset
                 vertical/>
      <v-col :cols="8">
        <todo-content/>
        <v-divider></v-divider>
        <todo-comment></todo-comment>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import TodoContent from '../components/TodoContent';
  import TodoList from '../components/TodoList';
  import TodoComment from '../components/TodoComment';

  export default {
    name: 'Home',
    components: {
      TodoContent,
      TodoList,
      TodoComment
    },
  };
</script>

<style lang="scss">
  .row {
    width: 100%;
  }
</style>
