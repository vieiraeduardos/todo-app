import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ?
  todos.map(todo => {
    return (
      <div className="collection-item" key={todo.code}>
        <span onClick={() => {deleteTodo(todo.code)}}>{todo.content}</span>
      </div>
    )
  }) : (
    <p className="center">Você não tem todos!</p>
  )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )

}

export default Todos;
