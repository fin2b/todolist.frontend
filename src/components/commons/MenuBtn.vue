<template>
  <v-menu offset-y>
    <template v-slot:activator="{on}">
      <v-btn text icon v-on="on">
        <v-icon>{{icons.mdiDotsVertical}}</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(el, idx) in elems" :key="idx" @click="onClick(el)">
        <v-list-item-title>{{el}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  import {mdiDotsVertical} from '@mdi/js';

  export default {
    props: [
      'item',
      'elems',
      'onClick'
    ],
    data: () => ({
      icons: {
        mdiDotsVertical,
      },
    }),
  }
</script>