<template>
  <v-app>
    <Layout title="Projects">
      <v-app>
        <v-row>
          <v-col>
            <ToDoList />
          </v-col>
          <v-divider class="mx-4"
          inset
          vertical />
          <v-col :cols="8">
            <ToDoListDesc />
          </v-col>
        </v-row>
      </v-app>
    </Layout>
  </v-app>
</template>

<script>
import Layout from './components/Layout';
import ToDoList from './apis/ToDoList';
import ToDoListDesc from './apis/ToDoListDesc';

export default {
  name: 'App',

  components: {
    Layout,
    ToDoList,
    ToDoListDesc,
  },

  data: () => ({
    //
  }),

  methods: {
  }
};
</script>
