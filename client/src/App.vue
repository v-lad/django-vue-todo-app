<template>
  <v-app id="sandbox" :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      app
    ></v-navigation-drawer>
    
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
        <TodoList/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import AuthService from './auth/AuthService'
// import axios from 'axios'

// const API_URL = 'http://localhost:8000'

// const auth = new AuthService()

import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoList,
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
    created() {
      console.log(this.$store)
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

h1 {
	text-align: center;
}

</style>

