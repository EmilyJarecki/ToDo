import React, {useState} from "react"
import TodoForm from './TodoForm'

const Todo = (props)=>{

  const deleteClickedTodo = () => {
    props.deleteTodo(props.todo)
  }

  const [formStyle, setFormStyle] = useState({display: 'display'})

  const toggleBodyForm = () => {
    formStyle.display === 'block'
    ? setFormStyle({ display: 'none'} )
    : setFormStyle({ display: 'display'} )
  }

    return (
      <li data-todos-index={props.todo._id}>
        <div>
          <span className="todo-item">
            {props.todo.body}</span>
          <span
            className='edit'
            onClick={toggleBodyForm}>
            Edit
          </span>
          <span
            className='remove'
            onClick={deleteClickedTodo}>
            Remove
          </span>
        </div>
        <TodoForm
          todo={props.todo}
          style={formStyle}
          autoFocus={true}
          buttonName="Update Todo!"
          updateTodo={props.updateTodo}
          toggleBodyForm={toggleBodyForm} />
      </li>
    )
  }
export default Todo