<template>
  <v-dialog
    persistent
    scrollable
    v-model="dialog"
    max-width="400"
  >
    <v-card>
      <v-card-title class="headline">Move to Other Projects</v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="onClose"
        >
          Select
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
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
    methods: {
      onClose() {
        this.dialog = false;
      },
    }
  }
</script>