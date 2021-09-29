import Vue from 'vue'
import App from './App.vue'
import ('./assets/css/app.css')
import {routes} from "@/routes";


Vue.config.productionTip = false
import VueRouter from "vue-router";
Vue.use(VueRouter)

const router =new VueRouter({
  mode:'history',
  routes,
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
