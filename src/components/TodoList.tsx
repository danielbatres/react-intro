import React from 'react';
import '../styles/TodoList.css';

export const TodoList = (props): JSX.Element => {
  return (
   <section className="TodoList-container">
     {props.error && props.onError()}
     {props.loading && props.onLoading()}
     {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
     {props.searchedTodos.map(props.render)}
     <ul>
       {props.children}
     </ul>
    </section>
  );
}
