import React from 'react';

const TodoForm = () => {
  const onCancel = () => {

  }

  const onAdd = () => {

  }
  
  const onSubmit = () => {
    
  }

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea placeholder="Cut onion for lunch"/>
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={onAdd}
          >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };