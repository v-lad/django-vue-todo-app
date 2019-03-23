import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from './api/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    categories: [{category_name: "Main", id: 1}],
    nextTodoId: 1,
    todoText: "",
    categoryText: "",
    nextCatId: 1,
  },
  getters: {
    todos: state => state.todos,
    categories: state => state.categories,
    todoText: state => state.todoText,
    nextTodoId: state => state.nextTodoId,
    categoryText: state => state.categoryText,
    nextCatId: state => state.nextCatId,
  },
  mutations: {
    addTodo (state, todo) {
      state.todos = [todo, ...state.todos];
      // console.log(state.todos)
    },
    setTodos (state, { results }) {
      state.todos = results
    },
    changeTodoText(state, data) {
      state.todoText = data.newText;
    },
    changeCategoryText(state, data) {
      state.categoryText = data.newCat;
    },
    clearTodoText(state) {
      state.todoText = "";
    },
    clearCategoryText(state) {
      state.categoryText = "";
    },
    updateTodos(state, deleteTodoId) {
      state.todos = state.todos.filter(todo => todo.id !== deleteTodoId);
    },
    addCategory(state, category) {
      state.categories = [...state.categories, category];
    },
    removeCategory(state, catId) {
      state.categories = state.categories.filter(cat => (cat.id !== catId))
    }
  },
  actions: {
    createTodo ({ commit }, todoData) {
      console.log(todoData)      
      HTTP
        .post('/todos/', todoData)
        .then(r => r.data)
        .then(data => {
          console.log(data)
          commit('addTodo', data);
          commit('clearTodoText');
        });
    },
    async getTodos({commit}) {
      await HTTP
        .get('todos')
        .then(r => r.data)
        .then(data => {
          commit('setTodos', data);
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
    changeCategoryText({commit}, newCat) {
      commit('changeCategoryText', {newCat})
    },
    addCategory({commit}, category) {
      // console.log(category)
      commit('addCategory', category);
      commit('clearCategoryText');
    },
    removeCategory({commit}, catId) {
      commit('removeCategory', catId)
    }
  }
});

export default store;