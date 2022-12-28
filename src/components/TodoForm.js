import React, { useState } from 'react';


const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.todo)

  const onChange = (e) => {
    setTodo({...todo, body: e.target.value})
};

const onSubmit = (e) => {
  e.preventDefault();
  props.updateTodo(todo);
  setTodo({...todo})
  props.toggleBodyForm();
};



    return (
      <div style={props.style}>
        <form onSubmit={onSubmit} id="taskForm">
          <input
            onChange={onChange}
            type="text" id="newItemDescription"
            placeholder="What do you need to do?"
            value={todo.body}
          />
          <button type="submit" id="updateTask" className="btn">{props.buttonName}</button>
        </form>
      </div>
    );

};

export default TodoForm;


