<template>
  <v-app>
    <Layout title="Projects"/>
    <router-view/>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
  data: () => ({
    //
  }),
  methods: {
  },
};
</script>
