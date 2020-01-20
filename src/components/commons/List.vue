<template>
  <v-list-item-group v-model="item" color="primary">
    <v-list-item v-for="(item, i) in items" :key="i" @click="onClickItem(item)">
      <v-list-item-icon>
        <v-icon v-text="i+1"/>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"/>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
  export default {
    props: {
      'items': Array,
      'onClickItem': Function,
    },
    data: () => ({
      item: '',
    }),
  }
</script>