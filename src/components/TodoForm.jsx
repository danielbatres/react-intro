import React from 'react';
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo
  } = React.useContext(TodoContext);

  const onChange = event => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {

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