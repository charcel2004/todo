import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
  <input
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Ajouter une tâche..."
  />
  <button type="submit">Ajouter</button>
</form>
  );
}

export default TodoForm;