import Vue from 'vue'
import Vuex from 'vuex'
import { Todo } from './api/todos'
import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODOS
} from '../store/mutation-types.js'
import { HTTP } from './api/common'


Vue.use(Vuex)

// Состояние
const store = new Vuex.Store({
  state: {
    todos: [],  // список заметок
    nextTodoId: 1,
    todoText: "",
  },
  // Геттеры
  getters: {
    todos: state => state.todos,  // получаем список заметок из состояния
    todoText: state => state.todoText,
    nextTodoId: state => state.nextTodoId,
  },
  // Мутации
  mutations: {
    // Добавляем заметку в список
    [ADD_TODO] (state, todo) {
      state.todos = [todo, ...state.todos];
      // console.log(state.todos)
    },
    // Задаем список заметок
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
  // Действия
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