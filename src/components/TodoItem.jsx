import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setEditing(false);
  };

  return (
   <li className="item">
  {editing ? (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleUpdate}>✔</button>
    </>
  ) : (
    <>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => setEditing(true)}>✏</button>
        <button onClick={() => deleteTodo(todo.id)}>🗑</button>
      </div>
    </>
  )}
</li>
  );
}

export default TodoItem;