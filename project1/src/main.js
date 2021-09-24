import Vue from 'vue'
import App from './App.vue'
import ('./assets/css/app.css')
import {routes} from "@/routes";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ('./components/User/validation')
Vue.component('font-awesome-icon', FontAwesomeIcon)


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
