<template>  
    <div class="profile-page">  
      <h1>WELCOME TO MY HOME PAGE</h1>  
      <h2>这里是 是福福惹 的主页</h2>
        <p>
            个性说说：高山仰止，景行行止
        </p>
        <p>姓名:尤晓玲</p>
        <p>学号:22000953</p>
        <p>短期目标:成为前端技术“砖家”</p>
        <img width='200' height='200' src="../assets/1.jpg" />
    </div>  
  </template>  
    
  <script>  
  export default {  
    name: 'ProfilePage'  
  }  
  </script>  
    
  <style scoped>
  .profile-page {
    text-align: center;
  } 
  h1 {
    font-size: 25px;
    text-align: center;

  }
  h2 {
    color: #ffcc56;
    text-align: center;
    font-size: 40px;

  }
  img {
    border-radius: 0%;
    padding-bottom: 20px;
  }
  </style>