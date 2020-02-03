<template>
  <div class="todo">
    <List :items="todos" :on-click-item="onClickItem" :checkbox="true"/>
    <div class="todo-list-create" v-if="storedTodoCurrentType === pageType.CREATE">
      <v-list-item>
        <v-list-item-icon>
          <v-icon v-text="storedTodoList.length + 1"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-text-field v-model="title" dense label="todo title" />
          <v-btn @click="onClickCreateTitle" color="primary">등록</v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-btn large color="primary" class="todo-list-create-cancel-button" @click="onClickCancel">
        cancel
      </v-btn>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {Project} from "../model";
  import {List} from './commons';

  export default {
    components: {
      List,
    },
    computed: {
      ...mapGetters({
        storedProject: 'getProject',
        storedTodoList: 'getTodos',
        storedTodoCurrentType: 'getTodoCurrentType',
      }),
    },
    created() {
      this.todos = this.storedTodoList;
      this.$store.dispatch('asyncSetProject', Project.findById(this.$route.params.id - 1))
        .then(() => this.$store.commit('setTodoList', this.storedProject.todos))
        .then(() => this.todos = this.storedTodoList);
    },
    data: () => ({
      todos: [],
      pageType: {
        RETRIEVE: '조회하기',
        CREATE: '새로 만들기',
      },
      title: '',
    }),
    methods: {
      onClickItem(todo) {
        if (this.storedTodoCurrentType !== this.pageType.RETRIEVE) {
          this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
        }
        this.$store.commit('setTodo', todo);
      },
      onClickCancel() {
        this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
      },
      onClickCreateTitle() {
        console.log('create title', this.title);
        this.$store.commit('setTodoTitle', this.title);
      }
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }
  .col {
    padding: 0;
  }
  .todo {
    height: 100%;

    &-list-create {
      position: relative;

      &-cancel-button {
        position: absolute;
        width: 100%;
      }
    }
  }

</style>