import React from 'react';

export const TodoItem  = ({onToggle,onRemove,completed,text}) => {
    return (
        <li
        className='todo-item'
        style={{
            textDecoration:completed ? 'line-through' : 'none'
        }}
        >
            <input type="checkbox" className="toggle" checked={completed ? 'checked':''} readOnly onClick={onToggle}/>
            <label className="text">{text}</label>
            <button className='remove' onClick={onRemove}>X</button>
        </li>
    )
};
