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
      // 字符串类型，用于存储用户输入的新待办事项。
      newTodo: '',   
      // 数组类型，用于存储所有的待办事项。每个待办事项都是一个对象，包含 text（待办事项的文本）和 done（待办事项是否完成）两个属性。
      todos: [  
      ],  
      allChecked: false, 
      // 布尔类型，用于表示是否所有待办事项都已完成。   
    };  
  },
  // 使用 bus.$on 方法监听名为 addTodo 的事件。当该事件被触发时，将传入的 newtodo 添加到 todos 数组。
  created() {
    bus.$on('addTodo', (newtodo) => {
      this.todos.push(newtodo)
    })
  },
  methods: {
    // 功能：添加新的待办事项到 todos 数组。
    addTodo() {  
        if (this.newTodo.trim()) {  
          this.todos.push({ text: this.newTodo, done: false });  
          this.newTodo = ''  
        }  
    },
    // 功能：更新指定索引的待办事项的完成状态。
    // 使用 Vue 的 $set 方法来确保 Vue 能够检测到数组的变化，并更新 done 属性。
    updateTodo(index, event) {  
        this.$set(this.todos[index], 'done', event.target.checked);  
        this.checkAll();  
    },
    // 功能：删除指定索引的待办事项。
    // 使用 splice 方法从 todos 数组中删除指定索引的待办事项。 
    removeTodo(index) {  
        this.todos.splice(index, 1);  
    },
    // 功能：切换所有待办事项的完成状态。
// 将所有待办事项的 done 属性设置为 allChecked 的值。
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