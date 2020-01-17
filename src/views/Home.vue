<template>
  <v-app>

    <v-row>
      <v-col>
        <to-do-list/>
      </v-col>
      <v-divider class="mx-4"
                 inset
                 vertical/>
      <v-col :cols="8">
        <to-do-list-desc/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import ToDoListDesc from '../components/ToDoListDesc';
  import ToDoList from '../components/ToDoList';

  export default {
    name: 'Home',
    components: {
      ToDoList,
      ToDoListDesc,
    },
  };
</script>

<style scoped>

</style>
