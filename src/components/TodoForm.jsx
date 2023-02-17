import React from 'react';
import '../styles/TodoForm.css';
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal
  } = useTodos();

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
      <label>Enter your new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cut onion for lunch"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        > Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };