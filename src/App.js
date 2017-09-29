import React, { Component } from 'react';
import './App.css';
import {TodoApp} from './todoList/todos/index';
import {FilterApp} from './todoList/filters/index';

class App extends Component {
  render() {
    return (
        <div>
          <TodoApp/>
          <FilterApp/>
        </div>
    );
  }
}

export default App;
