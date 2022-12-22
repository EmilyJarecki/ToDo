import React, { useState, useEffect } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';

const TodosContainer = () => {
  const [todos, setTodos] = useState([])


    useEffect(()=>{
    TodoModel.all().then((res) => {
      console.log(res);
    setTodos(res.data)
    });
  },[])

    return (
      <div className="todosComponent">
        <h1>Hello World</h1>
        <Todos
          todos={todos} />
      </div>
    )
};

export default TodosContainer;

