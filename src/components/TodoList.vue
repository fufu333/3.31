<template>
  <div>
    <label>  
        <input type="checkbox" class="custom-checkbox" v-model="allChecked" @change="toggleAll"> <span>全选</span>  
    </label>
    
    <ul class="todo-list-items" ref="todoListItems">  
      <li v-for="(todo, index) in todos" :key="index">  
        <input type="checkbox" :value="todo.done" v-model="todo.done" @change="updateTodo(index, $event)">  
        <span>{{ todo.text }}</span>  
        <button @click="removeTodo(index)">删除</button>  
      </li>  
    </ul>
  </div>
</template>  
    
<script >  
import { defineComponent } from 'vue'
import { bus } from '@/bus';
export default defineComponent({
  name: 'TodoList',
  data() {  
    return {  
      newTodo: '',
      todos: [  
      ],  
      allChecked: false,    
    };  
  },
  created() {
    bus.$on('addTodo', (newtodo) => {
      this.todos.push(newtodo)
    })
  },
  methods: {
    addTodo() {  
        if (this.newTodo.trim()) {  
          this.todos.push({ text: this.newTodo, done: false });  
          this.newTodo = ''  
        }  
    },
    updateTodo(index, event) {  
        this.$set(this.todos[index], 'done', event.target.checked);  
        this.checkAll();  
    },  
    removeTodo(index) {  
        this.todos.splice(index, 1);  
    },
    toggleAll() {  
      this.todos.forEach(todo => {  
        todo.done = this.allChecked;  
      }); 
    },
  },
})
</script>  
    
<style scoped>  
  .action-buttons {  
    display: flex;  
    justify-content: flex-end;  
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
    
  ul {  
    list-style-type: none;  
    padding: 0;  
    text-align: left;
  }  
  
  li {  
    margin-bottom: 10px; 
    width: 500px; 
    align-items: center;
    display: flex;    
    justify-content: space-between;  
  } 
  
  li input[type="checkbox"] {  
    height: 20px;
    width: 20px;
    margin-right: 15px;  
  }
  
  .custom-checkbox {   
    width: 20px; 
    height: 20px;
  }

  span {
    color: #ffffff;
    size: 10px;
  }

  .todo-list-items {  
    height: 300px;
    overflow-y: auto;  
    padding: 0;  
    margin: 0;  
    list-style-type: none;  
  }
  </style>