// router/index.js  
import Vue from 'vue'  
import VueRouter from 'vue-router'  
import HomePage from '../components/HomePage.vue'  
import ProfilePage from '../components/ProfilePage.vue'  
  
Vue.use(VueRouter)  
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: HomePage  
  },  
  {  
    path: '/profile',  
    name: 'Profile',  
    component: ProfilePage  
  }  
]  
  
const router = new VueRouter({  
  mode: 'hash', // 使用hash模式  
  routes  
})  
  
export default router