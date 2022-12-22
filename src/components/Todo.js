const Todo = (props)  =>  (
    <li data-todos-index={props.todo._id}>
      <span className="todo-item">{props.todo.body}</span>
    </li>
);

export default Todo;
