import React from 'react';
import * as filterTypes from '../../filters/filterTypes';
import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from "../actions";
import {TodoItem} from "./TodoItem";

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
};
const selectVisibleTodo = (todos, filter) => {
    switch (filter) {
        case filterTypes.ALL:
            return todos;
        case filterTypes.COMPLETED:
            return todos.filter((item) => item.completed);
        case filterTypes.UNCOMPLETED:
            return todos.filter((item) => !item.completed);
        default:
            throw new Error('unsupported filter!');
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos:selectVisibleTodo(state.todos,state.filter)
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onToggleTodo:(id) => {
          dispatch(toggleTodo(id))
      },
      onRemoveTodo:(id) => {
          dispatch(removeTodo(id))
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);