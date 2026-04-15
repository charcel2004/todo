import { useState } from "react";
import { Trash2,Pencil } from 'lucide-react';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li>
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => { updateTodo(todo.id, text); setEditing(false); }}>✔</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => setEditing(true)}><Pencil /></button>
          <button onClick={() => deleteTodo(todo.id)}><Trash2 /></button>
        </>
      )}
    </li>
  );
}

export default TodoItem;