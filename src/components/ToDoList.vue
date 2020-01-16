<template>
  <List :items="items" :on-click-item="onClickItem"/>
</template>

<script>
  import List from '../components/List';
  export default {
    components: {
      List,
    },
    data: () => ({
      items: [
        {title: 'Real-Time', desc: 'hihihihihihihihi \n hihihihi111'},
        {title: 'Audience', desc: 'hihihihihihihihi \n hihihihi222'},
        {title: 'Conversions', desc: 'hihihihihihihihi \n hihihihi33'},
      ],
      item: {},
      index: 0,
    }),
    created() {
      this.$store.commit('setItems', this.items);
    },
    methods: {
      onClickItem(idx) {
        this.item = this.items[idx];
        this.$store.commit('setItem', this.item);
      },
    },
  };
</script>
