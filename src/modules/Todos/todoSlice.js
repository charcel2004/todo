export const addTodo = (todos, text) => {
  return [...todos, { id: Date.now(), text }];
};

export const deleteTodo = (todos, id) => {
  return todos.filter(todo => todo.id !== id);
};

export const updateTodo = (todos, id, newText) => {
  return todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
};