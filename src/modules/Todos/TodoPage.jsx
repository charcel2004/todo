import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo, deleteTodo, updateTodo } from "./todoSlice";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="card">
      <h2>Mes taches</h2>
      <TodoForm addTodo={(text) => setTodos(addTodo(todos, text))} />

      <TodoList
        todos={todos}
        deleteTodo={(id) => setTodos(deleteTodo(todos, id))}
        updateTodo={(id, text) => setTodos(updateTodo(todos, id, text))}
      />
    </div>
  );
}

export default TodoPage;