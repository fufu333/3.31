import Vue from 'vue'  
import Router from 'vue-router'

import HomePage from '../components/HomePage.vue'  
import ProfilePage from '../components/ProfilePage.vue'  
  
Vue.use(Router) 

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
  
const router = new Router({  
  mode: 'hash', // 使用hash模式  
  routes  
})  
  
export default router