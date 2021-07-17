import React from 'react'
import { Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Todos({todo,handleToggle,delTask}) {
    const handleClick=(e)=>{
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }
    return (
        <div className={!todo.complete?"todo-row":"todo-row complete"} >
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} style={{minWidth:"350px",display:'flex'}} onClick={handleClick}>
                {todo.task}
            </div>
            <Button className="todo-button" style={{minWidth:"95px",maxHeight:"50px"}} startIcon={<DeleteIcon />} onClick={()=>delTask(todo.id)}>
                <Typography style={{color:'white',textTransform:'capitalize'}}>
                  Delete
                </Typography>
            </Button>
        </div>
    )
}

export default Todos
