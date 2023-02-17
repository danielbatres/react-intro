import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODO's</h2>;
}

export { TodoCounter };