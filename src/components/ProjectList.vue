<template>
  <List :items="projects" :on-click-item="onClickItem" />
</template>

<script>
  import {List} from "./commons";

  export default {
    components: {
      List,
    },
    props: [
      'projects',
    ],
    data: () => ({
    }),
    created() {
      console.log(this.projects);
    },
    methods: {
      onClickItem(project) {
        this.$router.push({name: 'home', params: {id: project.id}})
        .catch(err => {
          if (err.name === "NavigationDuplicated")
            return {};
          console.error(err);
        })
      },
    }
  }
</script>