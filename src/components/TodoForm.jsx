import React from 'react';
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onChange = event => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }
  
  const onSubmit = event => {
    event.preventDefault();
    addTodo(newTodoValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cut onion for lunch"
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };