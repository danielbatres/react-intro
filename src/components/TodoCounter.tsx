import React from 'react';
import '../styles/TodoCounter.css';

export const TodoCounter = ({ totalTodos, completedTodos }): JSX.Element => {
  return <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODO's</h2>;
}