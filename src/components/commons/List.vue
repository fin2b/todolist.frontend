<template>
  <v-list-item-group v-model="item" color="primary">
    <div v-if="checkbox">
      <v-list-item v-for="(item, i) in items" :key="i" @click="onClickItem(item)">
        <v-list-item-icon>
          <v-icon v-text="i+1"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
        <v-checkbox v-model="selected" :value="i">
        </v-checkbox>
      </v-list-item>
    </div>
    <div v-else>
      <v-list-item v-for="(item, i) in items" :key="i" @click="onClickItem(item)">
        <v-list-item-icon>
          <v-icon v-text="i+1"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </div>
    </v-list-item-group>
</template>

<script>

  export default {
    props: {
      'items': Array,
      'onClickItem': Function,
      'checkbox': Boolean,
    },
    watch: {
      selected() {
        console.log(this.selected);
      }
    },
    data: () => ({
      item: '',
      selected: [],
    }),
  }
</script>