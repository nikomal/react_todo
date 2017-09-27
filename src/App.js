import React, { Component } from 'react';
import './App.css';
import {views as Todos} from './todoList/todos/';
import {views as Filter} from './todoList/filters/'

class App extends Component {
  render() {
    return (
        <div>
          <Todos/>
          <Filter/>
        </div>
    );
  }
}

export default App;
