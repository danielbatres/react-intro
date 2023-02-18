import React from 'react';
import '../styles/TodoList.css';

export const TodoList = ({ children }): JSX.Element => {
  return (
   <section>
      <ul>
        {children}
      </ul>
    </section>
  );
}
