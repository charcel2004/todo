import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <ul className="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;