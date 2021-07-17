import { Button, styled } from '@material-ui/core';
import React,{useState} from 'react'


function TodoForm({addTask}) {
    const [input,setInput]=useState("");
    const handleChange=e=>{
        e.preventDefault();
        setInput(e.currentTarget.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        addTask(input);
        setInput("");
    }

    return (
        <div className="todo-form">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                className="todo-input"
                type="text" 
                placeholder="Add Task" 
                value={input}
                onChange={handleChange}/>
                <button className="todo-button" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
