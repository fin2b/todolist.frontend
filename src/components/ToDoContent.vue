<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="11">
        <div v-if="storedTodoCurrentType === pageType.RETRIEVE">
          <div class="description">
            {{storedTodo.description}}
          </div>
        </div>
        <div v-else-if="storedTodoCurrentType === pageType.UPDATE">
          <div>
            <v-icon class="edit-icon">{{icons.mdiFileEditOutline}}</v-icon>
            editing...
          </div>
          <textarea type="text" id="description" class="edit-description" :value="storedTodo.description" @input="onInput" rows="15"/>
          <v-btn type="submit" class="submit-btn" color="primary" @click.prevent="onSubmit">submit</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="1">
        <MenuBtn :item="storedTodo" :elems="pageType" :onClick="onClick"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapGetters} from "vuex";
  import {MenuBtn} from "./commons";
  import pageType from '../util/pageType';
  import {mdiFileEditOutline} from '@mdi/js';

  export default {
    components: {
      MenuBtn,
    },
    computed: {
      ...mapGetters({
        storedTodo: 'getTodo',
        storedTodoCurrentType: 'getTodoCurrentType',
      })
    },
    data: () => ({
      pageType,
      icons: {
        mdiFileEditOutline,
      },
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

  .submit-btn {
    margin-right: auto;
  }
</style>