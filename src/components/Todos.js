import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    console.log(props)
  let todos = props.todos?.map((todoObj) => {
    return (
      <Todo
        key={todoObj._id}
        todo={todoObj} 
        deleteTodo={props.deleteTodo}
        updateTodo={props.updateTodo}
        />
    )
  })

  return (
    <ul>
      {todos}
    </ul>
  )
}

export default Todos;
