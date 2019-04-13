import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Forum from './views/Forum'
import Thread from './views/Thread'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/forum/:id', component: Forum },
    { path: '/thread/:id', component: Thread },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
