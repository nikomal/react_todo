import {createStore,combineReducers} from 'redux';

import {reducers as todoReducer} from './todoList/todos/reducer';

import {reducers as filterReducer} from './todoList/filters/reducer'

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
});

export default createStore(reducer);