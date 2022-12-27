import React, { useState } from 'react';


const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.todo.body)

  const onChange = (e) => {
      setTodo(e.target.value)  


  }

  const onSubmit = (e) => {
    props.toggleBodyForm();
    e.preventDefault();
    const updatedTodo = {...props.todo, body: todo};
    props.updateTodo(updatedTodo);
    setTodo('')
  };


    return (
      <div>
        <form onSubmit={onSubmit} id="taskForm">
          <input
            onChange={onChange}
            type="text" id="newItemDescription"
            placeholder="Edit here"
            value={todo}
          />
          <button type="submit" id="addTask" className="btn">Update</button>
        </form>
      </div>
    );

};

export default TodoForm;


