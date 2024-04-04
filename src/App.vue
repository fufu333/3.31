<template>
  <div class="todo-list">
    <div id="app" >
      <nav class="nav-bar">
        <router-link to="/">首页</router-link> <!-- 首页链接 -->  
        <router-link to="/profile">个人主页</router-link> <!-- 个人主页链接 -->  
        <a href="https://github.com/fufu333/3.31" target="_blank" class="github-button">GitHub代码仓库</a>  <!-- 修改后的GitHub链接 -->  
      </nav>
      <router-view /> <!-- 路由出口 -->
    </div>   
 
  </div>  
</template>  
  
<script>
import { defineComponent } from 'vue'  


  
export default defineComponent ({  
  name: 'App',  
  

  data() {  
    return {  
        
    }  
  
  }
})  
</script>  
  
<style scoped>  
.todo-list {  
    position: relative;  
    display: flex;  
    align-items: center;  
    flex-direction: column;  
    height: 100vh;  
    margin: 0 auto;  
    padding: 20px;  
    box-sizing: border-box;  
    color: white;  
    text-align: center;  
    overflow: hidden;   
  }  
  
  .todo-list::before {  
    content: "";  
    position: fixed;  
    top: 0;  
    left: 50%;
    transform: translateX(-50%);  
    width: 100vw;  
    height: 100vh; 
    background-image: url('./assets/bj.jpg');  
    background-size: cover;  
    background-position: center;  
    background-repeat: no-repeat;  
    z-index: -1; 
    pointer-events: none;  
  }  
  
.nav-bar {  
    display: flex;  
    justify-content: center; /* 水平居中按钮 */  
    align-items: center;  
}  
  
.nav-bar a {  
    color: white;   
    text-decoration: none;  
    margin: 0 20px;  
    font-size: 1.2em;  
    transition: font-size 0.1s ease;  
}  
  
.nav-bar a:hover {  
    font-size: 1.4em; 
} 
</style>