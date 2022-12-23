import React, { useState } from 'react';


const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.todo.body)

  const onChange = (e) => {
      setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {...props.todo, body: todo};
    props.updateTodo(updatedTodo);
    setTodo('')
    props.toggleBodyForm();
  };


    return (
      <div>
        <form onSubmit={onSubmit} id="taskForm">
          <input
            onChange={onChange}
            type="text" id="newItemDescription"
            placeholder="What do you need to do?"
            value={todo}
          />
          <button type="submit" id="addTask" className="btn">Edit Todo</button>
        </form>
      </div>
    );

};

export default TodoForm;


