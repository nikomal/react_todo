import React from 'react';
import AddTodo from './views/addtodo'
export default () =>{
    return (
        <div className={todos}>
            <AddTodo/>
            <TodoList/>
        </div>
    )
}