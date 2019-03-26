<template>
  <div>
    <BaseInputText
      placeholder="Add TODO"      
    />
    <ul v-if="todos.length">
      <!-- :todo должен быть определен в props в TodoListItem -->
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"        
        :todo="todo"
      />
    </ul>
    <p v-else>No todos. You can add some above.</p>
  </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue';
import TodoListItem from './TodoListItem.vue';
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'TodoList',
  components: {
    BaseInputText, TodoListItem
  },

  async created() {
    await this.getTodos(this.$route.params.category ? Number(this.$route.params.category) : 1, this.$route.params)
  },

  computed: {
    todos: {
      get() {
        return this.$store.getters.todos;
      },
    },
  },

  methods: {
    ...mapActions(['createTodo', 'getTodos']),
  }
}
</script>
