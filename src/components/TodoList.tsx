import React from 'react';
import '../styles/TodoList.css';

export const TodoList = (props): JSX.Element => {
  return (
   <section className="TodoList-container">
     {props.error && props.onError()}
     <ul>
       {props.children}
     </ul>
    </section>
  );
}
