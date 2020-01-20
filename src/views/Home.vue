<template>
  <v-app>
    <v-row>
      <v-col>
        <to-do-list/>
      </v-col>
      <v-divider inset
                 vertical/>
      <v-col :cols="8">
        <to-do-content/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import ToDoContent from '../components/ToDoContent';
  import ToDoList from '../components/ToDoList';

  export default {
    name: 'Home',
    components: {
      ToDoList,
      ToDoContent,
    },
  };
</script>
