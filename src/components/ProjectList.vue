<template>
    <List :items="items" :on-click-item="onClickItem"/>
</template>

<script>
  import List from "./List";

  export default {
    components: {
      List,
    },
    data: () => ({
      items: [
        {title: 'project1'},
        {title: 'project2'},
        {title: 'project3'},
      ],
    }),
    methods: {
      onClickItem(idx) {
        this.item = this.items[idx];

      },
    }
  }
</script>