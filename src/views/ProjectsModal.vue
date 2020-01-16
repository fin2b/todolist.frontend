<template>
  <Dialog>
    <List :items="items" :on-click-item="onClickItem"/>
  </Dialog>
</template>

<script>
  import Dialog from "../components/Dialog";
  import List from "../components/List";

  export default {
    components: {
      Dialog,
      List,
    },
    data: () => ({
      items: [
        {title: 'project1'},
        {title: 'project2'},
        {title: 'project3'},
      ],
    }),
    created() {
    },
    methods: {
      onClickItem(idx) {
        this.item = this.items[idx];

      }
    }
  }
</script>