<template>
  <v-dialog
    persistent
    scrollable
    v-model="dialog"
    max-width="400"
  >
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <div v-if="Array.isArray(btn)">
          <span v-for="(button, i) in btn" :key="i">
            <v-btn color="green darken-1" text @click="onClickBtn[i]">
              {{button}}
            </v-btn>
          </span>
        </div>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: [
      'title',
      'btn',
      'onClickBtn'
    ],
    watch: {
      dialog: {
        handler() {
          this.$emit('on-close');
        }
      }
    },
    data: () => ({
      dialog: true,
    }),
  }
</script>