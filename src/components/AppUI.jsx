import React from 'react';
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>
            {error && <p>An error has ocurred...</p>}
            {loading && <p>Loading, please wait...</p>}
            {(!loading && !searchedTodos.length) && <p>¡¡Create your first TODO!!</p>}

            {searchedTodos.map(todo => (
                    /* A unique key is added to identify the components within a list */
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
          </TodoList>
          )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };