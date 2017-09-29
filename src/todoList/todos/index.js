import React from 'react';
import AddTodo from './views/addtodo';
import TodoList from './views/todoList';
import './views/style.css'
export const TodoApp =  () =>{
    return (
        <div className='todos'>
            <AddTodo/>
            <TodoList/>
        </div>
    )
};