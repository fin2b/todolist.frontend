<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="11">
        <div v-if="storedTodoCurrentType === pageType.RETRIEVE || storedTodoCurrentType === pageType.DELETE">
          <div class="description">
            {{storedTodo.description}}
          </div>
        </div>
        <div v-else-if="storedTodoCurrentType === pageType.UPDATE">
          <div>
            <v-icon class="edit-icon">{{icons.mdiFileEditOutline}}</v-icon>
            editing...
          </div>
          <textarea type="text" id="description" class="edit-description" :value="storedTodo.description"
                    @input="onInput" rows="15"/>
          <v-btn type="submit" class="edit-btn" color="primary" @click.prevent="onSubmit">수정</v-btn>
        </div>
        <div v-else-if="storedTodoCurrentType === pageType.CREATE">
          <textarea id="create-description" class="create-description" cols="30" rows="15"/>
          <v-btn color="primary" @click="onClickCreate">할 일 등록</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="1">
        <MenuBtn :item="storedTodo" :elems="pageType" :onClick="onClick"/>
      </v-col>
      <Dialog v-if="storedTodoCurrentType === pageType.DELETE" :options="deleteOptions">
        삭제하시겠습니까?
      </Dialog>
      <Dialog v-if="confirmed" :options="confirmOptions">
        삭제되었습니다.
      </Dialog>
    </v-row>
  </v-container>
</template>

<script>
  import {mapGetters} from "vuex";
  import {Dialog, MenuBtn} from "./commons";
  import {mdiFileEditOutline} from '@mdi/js';

  export default {
    components: {
      Dialog,
      MenuBtn,
    },
    computed: {
      ...mapGetters({
        storedTodo: 'getTodo',
        storedTodoCurrentType: 'getTodoCurrentType',
        storedTodoTitle: 'getTodoTitle',
      }),
    },
    created() {
      this.deleteOptions.onCancel = this.onDeleteCancel;
      this.deleteOptions.onConfirm = this.onDeleteConfirm;
      this.confirmOptions.onClose = this.onConfirmClose;
    },
    data: () => ({
      pageType: {
        RETRIEVE: '조회하기',
        UPDATE: '수정하기',
        DELETE: '삭제하기',
        CREATE: '새로 만들기',
      },
      icons: {
        mdiFileEditOutline,
      },
      initDialog: false,
      deleteOptions: {
        isShowConfirm: true,
        isShowCancel: true,
        onConfirm: Function,
        onCancel: Function,
      },
      confirmed: false,
      confirmOptions: {
        isShowClose: true,
        onClose: Function,
      }
    }),
    methods: {
      onClick(el) {
        this.$store.commit('setTodoCurrentType', el);
      },
      onInput(e) {
        this.description = e.target.value;
      },
      onSubmit(e) {
        console.log('description', this.description);
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
      },
      onDeleteCancel() {
        console.log('cancel');
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
      },
      onDeleteConfirm() {
        console.log('confirm');
        this.confirmed = true;
      },
      onConfirmClose() {
        console.log('confirm dialog close');
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
        this.confirmed = false;
      },
      onClickCreate() {
        console.log('create');
        this.$store.dispatch('asyncSetTodo',
          {title: this.storedTodoTitle, description: this.description});
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
      }
    },
  }
</script>

<style>
  .description {
    width: 100%;
    height: 400px;
  }

  .edit-description {
    width: 100%;
  }

  .edit-icon {
    margin: 10px;
  }

  .create-description {
    width: 100%;
  }
</style>