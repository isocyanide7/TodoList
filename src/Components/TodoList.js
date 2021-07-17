import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos';
import { Button, Typography } from '@material-ui/core';
function TodoList() {
    const [todoArr,setTodoArr]=useState([]);
    const handleToggle = (id) => {
        let mapped = todoArr.map(task => {
          return (task.id === Number(id) ? { ...task, complete:!task.complete } : { ...task});
        });
        console.log(mapped);
        setTodoArr(mapped);
    }
    const handleFilter = () => {
        let filtered = todoArr.filter(cur => {
          return !cur.complete;
        });
        setTodoArr(filtered);
    }
    const addTask=(input)=>{
        if(!input || input.match(/^\s*$/))
          return; 
        let copy=[...todoArr, {id:Math.floor(Math.random()*10000), task:input, complete:false}];
        setTodoArr(copy);
        console.log(todoArr);
    }
    const delTask=(id)=>{
        let filtered = todoArr.filter(cur => {
            return cur.id!==id;
          });
          setTodoArr(filtered);
    }
    return (
        <div className="todo-app">
            <h1>
                TODO LIST
            </h1>
            <h3>
                (Click on a Task to mark it as Complete)
            </h3>
            <TodoForm todoArr={todoArr} addTask={addTask}/>
            {todoArr.map(todo => {
               return (
                    <Todos todo={todo} handleToggle={handleToggle} delTask={delTask}/>
               )
           })}
           <br/>
           <Button onClick={handleFilter}>
               <Typography  className="todo-button" style={{color:'white'}}>
                   Clear Completed tasks
                </Typography>   
           </Button>
        </div>
    )
}

export default TodoList
