<template>
  <input 
    type="text"
    class="input"
    v-model="todoText"
    @keydown.enter="addTodo"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    console.log(this.todoText)
  },
  computed: {
    todoText: {
      get(){
          return this.$store.getters.todoText
      },
      set(newText){
          this.changeTodoText(newText)          
      }
    },
  },
  methods: {
    ...mapActions(['changeTodoText']),
    addTodo() {      
      const trimmedText = this.todoText.trim()
      this.$store.dispatch(
        'createTodo', 
        {
          todo: trimmedText, 
          category: this.$route.params.category ? Number(this.$route.params.category) : 1,
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.input {
  width: 80%;
  padding: 8px 10px;
  border: 1px solid $vue-white;
  margin: 20px 10% 20px;
}
</style>
