import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_TODO,
  SET_TODOS
} from '../store/mutation-types.js'
import { HTTP } from './api/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],  // список заметок
    nextTodoId: 1,
    todoText: "",
  },
  getters: {
    todos: state => state.todos,
    todoText: state => state.todoText,
    nextTodoId: state => state.nextTodoId,
  },
  mutations: {
    [ADD_TODO] (state, todo) {
      state.todos = [todo, ...state.todos];
      // console.log(state.todos)
    },
    [SET_TODOS] (state, { results }) {
      state.todos = results
    },
    changeTodoText(state, data) {
      state.todoText = data.newText;
    },
    clearTodoText(state) {
      state.todoText = ""
    },
    updateTodos(state, deleteTodoId) {
      state.todos = state.todos.filter(todo => todo.id !== deleteTodoId)
    },
  },
  actions: {
    createTodo ({ commit }, todoData) {
      console.log(todoData)      
      HTTP
        .post('/todos/', todoData)
        .then(r => r.data)
        .then(data => {
          console.log(data)
          commit(ADD_TODO, data);
          commit('clearTodoText');
        });
    },
    async getTodos({commit}) {
      await HTTP
        .get('todos')
        .then(r => r.data)
        .then(data => {
          commit(SET_TODOS, data);
        })
    },
    deleteTodo({commit}, todoId) {
       HTTP
        .delete(`todos/${todoId}`)
        .then(r => {
          if (r.status === 204) {
            commit('updateTodos', todoId);
          }
        })
    },
    changeTodoText({commit}, newText) {
      commit('changeTodoText', {newText});
    },
  }
});

export default store;