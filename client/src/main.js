import Vue from 'vue';
import App from "./App.vue";
import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill';
import store from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
    el: "#app",
    store,
    render: h => h(App)
})