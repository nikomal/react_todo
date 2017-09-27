import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actionTypes";
import {toggleTodo} from "./actions";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    completed: action.completed,
                    text: action.text
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                if (todoItem.id === action.id) return todoItem;
            })
        }
        default :
            return state;
    }
}