import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from "./TodoContext";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODO's</h2>;
}

export { TodoCounter };