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
        <v-btn
          color="green darken-1"
          text
          @click="onClose"
        >
          {{btnName}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: [
      'title',
      'btnName',
      'options'
    ],
    watch: {
      dialog: {
        handler() {
          this.$emit('on-close');
        }
      }
    },
    created() {
      this.default = {
        isShowConfirm: this.options.isShowConfirm || this.default.isShowConfirm,

      }
    },
    data: () => ({
      dialog: true,
      default: {
        isShowConfirm: false,
        isShowCancel: false,
        isShowClose: true,
      }
    }),
    methods: {
      onClose() {
        this.dialog = false;
      },
    }
  }
</script>