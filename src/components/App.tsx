import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from './Modal';
import { TodoForm } from "./TodoForm";
import {TodoHeader} from "./TodoHeader";
import { useTodos } from "../hooks/useTodos";

export function App(): JSX.Element {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  return (
    <>
    <TodoHeader>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
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
    {openModal && (
      <Modal>
        <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        />
      </Modal>
    )}
    <CreateTodoButton setOpenModal={setOpenModal}/>
    </>
  );
}
