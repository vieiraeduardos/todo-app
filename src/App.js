import React, { Component } from 'react';

import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    "todos": [
      {"code": 1, "content": "Estudar português"},
      {"code": 2, "content": "Ler artigo"}
    ]
  }

  deleteTodo = (code) => {
    let todos = this.state.todos.filter(todo => {
      return todo.code !== code
    })

    this.setState({
      todos: todos
    })
  }

  createTodo = (todo) => {
    todo.code = this.state.todos.length + 1
    let todos = [...this.state.todos, todo]

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h2 className="center">Todo List</h2>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />

        <AddTodo createTodo={this.createTodo} />
      </div>
    );
  }
}

export default App;
