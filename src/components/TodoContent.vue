<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="11">
        <div v-if="storedTodoCurrentType === pageType.RETRIEVE || storedTodoCurrentType === pageType.DELETE">
          <div class="description">
            {{storedCurrentTodo.description}}
          </div>
        </div>
        <div v-else-if="storedTodoCurrentType === pageType.UPDATE">
          <div>
            <v-icon class="edit-icon">{{icons.mdiFileEditOutline}}</v-icon>
            editing...
          </div>
          <textarea type="text" id="description" class="edit-description" :value="storedCurrentTodo.description"
                    @input="onInput" rows="15"/>
          <v-btn type="submit" class="edit-btn" color="primary" @click.prevent="onClickSubmit">수정</v-btn>
        </div>
        <div v-else-if="storedTodoCurrentType === pageType.CREATE">
          <textarea id="create-description" class="create-description" cols="30" rows="15"/>
          <v-btn color="primary" @click.prevent="onClickSubmit">할 일 등록</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="1">
        <MenuBtn :item="storedCurrentTodo" :elems="pageType" :onClick="onClick"/>
      </v-col>
      <Dialog v-if="storedTodoCurrentType === pageType.DELETE" :onClickBtn="onClickDeleteBtn" :btn="deleteBtn">
        삭제하시겠습니까?
      </Dialog>
      <Dialog v-if="storedTodoCurrentType === pageType.CONFIRM" :onClickBtn="onClickConfirmBtn" :btn="confirmBtn">
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
        storedCurrentProject: 'getCurrentProject',
        storedCurrentTodo: 'getCurrentTodo',
        storedTodoCurrentType: 'getTodoCurrentType',
        storedTodoTitle: 'getTodoTitle',
      }),
    },
    created() {
      this.onClickDeleteBtn.push(this.onDeleteConfirm, this.onDeleteCancel);
      this.onClickConfirmBtn.push(this.onConfirmClose);
      this.description = this.storedCurrentTodo.description;
    },
    data: () => ({
      pageType: {
        RETRIEVE: '조회하기',
        UPDATE: '수정하기',
        DELETE: '삭제하기',
        CREATE: '새로 만들기',
        CONFIRM: '확인하기'
      },
      icons: {
        mdiFileEditOutline,
      },
      description: '',
      initDialog: false,
      deleteBtn: ['confirm', 'cancel'],
      onClickDeleteBtn: [],
      confirmBtn: ['confirm'],
      onClickConfirmBtn: [],
    }),
    methods: {
      onClick(el) {
        this.$store.commit('setTodoCurrentType', el);
      },
      onInput(e) {
        this.description = e.target.value;
      },
      onDeleteCancel() {
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
      },
      onDeleteConfirm() {
        console.log('currentTodo', this.storedCurrentTodo);
        this.$store.dispatch('deleteTodo', this.storedCurrentTodo)
          .then(() => this.$store.commit('setTodoCurrentType', this.pageType.CONFIRM))
      },
      onConfirmClose() {
        this.$store.dispatch('findAllTodo', this.storedCurrentProject.id)
        .then(() => this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE));
      },
      onClickSubmit() {
        console.log(this.description);
        this.$store.dispatch('updateTodo', {
          todoId: this.storedCurrentTodo.id,
          description: this.description}
        ).then(() => this.$store.dispatch('findAllTodo', this.storedCurrentProject.id))
        .then(() => this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE))
        .catch(err => console.error(err));
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