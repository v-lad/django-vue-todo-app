import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from './api/common'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    categories: [],
    todoText: "",
    categoryText: "",
    currentCategory: null,
  },
  getters: {
    todos: state => state.todos,
    categories: state => state.categories,
    todoText: state => state.todoText,
    categoryText: state => state.categoryText,
    currentCategory: state => state.currentCategory,
  },
  mutations: {
    addTodo (state, todo) {
      state.todos = [todo, ...state.todos];
    },
    setTodos (state, { todos }) {
      state.todos = todos;
    },
    setCategoriesList (state, { results }) {
      state.categories = results;
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
    updateCategories(state, catId) {
      state.categories = state.categories.filter(cat => (cat.id !== catId))
    },
    setCurrentCategory(state, { category_name }) {
      state.currentCategory = category_name;
    },
  },
  actions: {
    createTodo ({ commit }, todoData) {
      // console.log(todoData)
      HTTP
        .post('/todos/', todoData)
        .then(r => r.data)
        .then(data => {
          // console.log(data)
          commit('addTodo', data);
          commit('clearTodoText');
        });
    },
    async getTodos({commit}, catId) {
      await HTTP
        .get(`categories/${catId}`)
        .then(r => r.data)
        .then(data => {
          console.log(data)
          commit('setTodos', data);
          commit('setCurrentCategory', data);
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
    removeCategory({commit}, catId) {
      HTTP
        .delete(`categories/${catId}`)
        .then(r => {
          if (r.status === 204) {
            commit('updateCategories', catId);
            router.push({name: 'AnotherCat', params: {category: '1'}})
          }
        })
    },
    async getCategories({commit}) {
      await HTTP
        .get('categories')
        .then(r => r.data)
        .then(data => {
          commit('setCategoriesList', data)
      });
    },
    createCategory({commit}, catData) {
      HTTP
        .post('/categories/', catData)
        .then(r => r.data)
        .then(data => {
          commit('addCategory', data);
          commit('clearCategoryText');
        });
    },
  },
});

export default store;