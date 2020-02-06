<template>
  <div class="todo">
    <List :items="todos" :on-click-item="onClickItem" :checkbox="true"/>
    <div class="todo-list-create" v-if="storedTodoCurrentType === pageType.CREATE">
      <v-list-item>
        <v-list-item-icon>
          <v-icon v-text="storedTodoList.length + 1"/>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="todo-list-create-content">
            <v-text-field
              v-model="title"
              dense
              label="todo title"
              class="todo-list-create-content-field"/>
            <v-btn icon color="green" @click="onClickSubmit">
              <v-icon>{{ icons.mdiCheckCircleOutline }}</v-icon>
            </v-btn>
            <v-btn icon color="red" @click="onClickCancel">
              <v-icon>{{ icons.mdiClose }}</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mdiCheckCircleOutline, mdiClose} from '@mdi/js';
  import {List} from './commons';

  export default {
    components: {
      List,
    },
    computed: {
      ...mapGetters({
        storedCurrentProject: 'getCurrentProject',
        storedTodoList: 'getTodos',
        storedTodoCurrentType: 'getTodoCurrentType',
        storedTodo: 'getTodo',
      }),
    },
    updated() {
      console.log(this.storedCurrentProject.id);
      this.$store.dispatch('asyncFindAllTodo', {projectId: this.storedCurrentProject.id});
      this.todos = this.storedTodoList;
    },
    data: () => ({
      todos: [],
      todo: {},
      pageType: {
        RETRIEVE: '조회하기',
        CREATE: '새로 만들기',
      },
      title: '',
      icons: {
        mdiCheckCircleOutline,
        mdiClose
      }
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
      onClickSubmit() {
        console.log('create title', this.title);
        this.todo = {
          title: this.title,
          projectId: this.storedCurrentProject.id
        };
        this.$store.dispatch('asyncSetTodo', this.todo)
          .then(response => this.$store.dispatch('asyncFindAllTodo', {projectId: this.storedCurrentProject.id}))
          .then(() => this.$store.commit('setTodo', this.storedTodoList[this.storedTodoList.length - 1]))
          .then(() => {
            this.$store.commit('setTodoCurrentType', this.pageType.RETRIEVE);
            console.log('current todo',  this.storedTodo);
          })
          .catch(console.error)
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

      &-content {
        display: flex;
        width: 70%;

        &-field {
          margin-right: 10px;
        }
      }
    }
  }

</style>