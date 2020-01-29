<template>
  <div>
    <div :key="idx" v-for="(comment, idx) in storedTodo.comments" class="comment-user">
      <img class="comment-user-img" :src="profileImg" alt="">
      <div class="comment-user-content">
        <div>{{comment.username}}</div>
        <span>{{comment.comment}}</span>
      </div>
      </div>
  </div>
</template>

<script>
  import profileImg from '../assets/download.png';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        storedTodo: 'getTodo',
      }),
    },
    data: () => ({
      profileImg,
    }),
    methods: {}
  }
</script>

<style lang="scss">
  .comment-user {
    display: flex;

    &-img {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
    &-content {
      margin: 10px;
    }
  }
</style>