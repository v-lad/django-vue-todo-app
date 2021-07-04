<template>
  <li>
    <div>{{ todo.todo }}</div>
    <v-btn icon small class="error" @click="removeTodo" id="del-button">
      <v-icon>clear</v-icon>
    </v-btn>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'getTodos']),
    removeTodo() {
      this.deleteTodo(this.todo.id)
    }
  }
}
</script>

<style lang="scss" scoped>

li {
  font-size: 22px;
  list-style-type: circle;
  
  @media screen and (max-width: 600px) {
    div {
      font-size: 14px;
    }
  }
  div {
    overflow: auto;
    font-size: 18px;
    word-break: break-all;
    display: inline;
  }
}

i {
  font-size: 14px;
}

</style>
