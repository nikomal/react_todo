import {createStore,combineReducers} from 'redux';

import {reducers as todoReducer} from './todoList/todos';

import {reducers as filterReducer} from './todoList/filters'

const reducer = combineReducers({
    todos:todoReducer,
    filters:filterReducer
});

export default createStore(reducer);