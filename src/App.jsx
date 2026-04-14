import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
  <h1> Ma Todo List</h1>

  <input
    className="search"
    type="text"
    placeholder="🔍 Rechercher..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <TodoForm addTodo={addTodo} />
  <TodoList
    todos={filteredTodos}
    deleteTodo={deleteTodo}
    updateTodo={updateTodo}
  />
</div>
  );
}

export default App;