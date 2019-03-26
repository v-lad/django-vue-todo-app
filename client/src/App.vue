<template>
  <v-app id="sandbox" :dark="dark">
    <router-view></router-view>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      app
    >
      <v-container fluid>
        <CategoriesList/>
        <AddCategory/>
      </v-container>
    </v-navigation-drawer>
    
    <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute id="nav-toolbar">
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        class="orange--text"
      ></v-toolbar-side-icon>
      <v-toolbar-title>TODO app</v-toolbar-title>
    </v-toolbar>
    
    <v-content>
      <v-container fluid>
        <h1>TODO</h1>
        <p id="cat-name">{{ currentCategory }}</p>
        <TodoList/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import TodoList from './components/TodoList.vue'
import AddCategory from './components/AddCategory.vue'
import CategoriesList from './components/CategoriesList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoList, AddCategory, CategoriesList
  },
  data: () => ({
    dark: true,
    drawers: ['Default (no property)'],
    primaryDrawer: {
      model: false,
      type: 'default (no property)',
      clipped: true,
      floating: false,
      mini: false
    },
  }),
  async beforeRouteUpdate(to, from, next) {
    console.log(to.params);
    await this.$store.dispatch('getTodos', to.params.category ? Number(to.params.category) : 1, this.$route.params);
    next();
  },
  computed: {
    ...mapGetters(['currentCategory']),
  }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#sandbox {
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-orange;
  #nav-toolbar {
    color: $vue-orange;
  }
}

h1, #cat-name {
	text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  color: $vue-headings;
}

</style>

