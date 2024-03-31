<template>
    <div class="semi-transparent-background">  
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="要添加点什么好呢" />  
      <button @click="addTodo">添加</button>  
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {  bus } from '../bus'

export default defineComponent ({
    name: 'AppHeader',
    components: {

    },
     
    data() {  
      return {  
        // 一个空字符串，用于存储用户输入的新待办事项
        newTodo: '', 
        // 一个布尔值，初始值为 false，可能用于表示所有待办事项是否都已标记为完成。 
        allChecked: false  
      };  
    }, 
    methods: { 
      // 如果 newTodo 属性有非空字符串值（通过 trim() 方法去除首尾空格后），那么它会通过 bus.$emit 发送一个 addTodo 事件，并将 newTodo 的值和 done: false 作为事件参数。发送事件后，它会将 newTodo 属性重置为空字符串。 
      addTodo() {  
        if (this.newTodo.trim()) {  
          bus.$emit('addTodo', { text: this.newTodo, done: false }) 
          this.newTodo = ''  
        }  
      }
        
    },
    // 这是一个深度监听器，用于监听 todos 属性的变化。当 todos 发生变化时，它会调用 checkAll 方法（注意，checkAll 方法在提供的代码片段中并未定义，可能在组件的其他部分或者父组件中定义）。
    watch: {  
      todos: {  
        deep: true,  
        handler() {  
          this.checkAll();  
        }  
      }  
    }
})   
</script>

<style>
.semi-transparent-background {  
    background-color: rgba(255, 255, 255, 0.652); 
    border-radius: 5px;  
    padding: 10px;
    display: flex;  
    justify-content: space-between;  
    align-items: center;
    width: 500px;
    margin-top: 150px;
    margin-bottom: 20px;
  }

input[type="text"] {  
    width: 350px;  
    height: 25px; 
    top: 45%; 
    margin-left: 10px; 
    padding-left: 10px;
    color: #000000; 
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px; 
    background-color: rgba(255, 255, 255, 0.701); 
  }

button {  
    padding: 10px 20px;
    margin-right: 10px;
    color: inherit;  
    background-color: rgba(238, 46, 46, 0.719);  
    border: none; 
    border-radius: 5px;
    cursor: pointer;   
}


</style>