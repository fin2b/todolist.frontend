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
        <v-btn v-if="defaultOptions.isShowClose"
          color="green darken-1"
          text
          @click="onClose"
        >
          close
        </v-btn>
        <v-btn v-if="defaultOptions.isShowSelect"
               color="green darken-1"
               text
               @click="onSelect"
        >
          select
        </v-btn>
        <v-btn v-if="defaultOptions.isShowCancel"
               color="green darken-1"
               text
               @click="onCancel"
        >
          cancel
        </v-btn>
        <v-btn v-if="defaultOptions.isShowConfirm"
               color="green darken-1"
               text
               @click="onConfirm"
        >
          confirm
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
      this.defaultOptions = {
        isShowConfirm: this.options.isShowConfirm || this.defaultOptions.isShowConfirm,
        isShowSelect: this.options.isShowSelect || this.defaultOptions.isShowSelect,
        isShowCancel: this.options.isShowCancel || this.defaultOptions.isShowCancel,
        isShowClose: this.options.isShowClose || this.defaultOptions.isShowClose,
      }
    },
    data: () => ({
      dialog: true,
      defaultOptions: {
        isShowConfirm: false,
        isShowSelect: false,
        isShowCancel: false,
        isShowClose: false,
      }
    }),
    methods: {
      onClose() {
        if (this.options.onClose) this.options.onClose();
        this.dialog = false;
      },
      onSelect() {
        if (!this.options.onSelect) return;
        this.options.onSelect();
        this.dialog = false;
      },
      onCancel() {
        if (!this.options.onCancel) return;
        this.options.onCancel();
        this.dialog = false;
      },
      onConfirm() {
        if (!this.options.onConfirm) return;
        this.options.onConfirm();
        this.dialog = false;
      }
    }
  }
</script>