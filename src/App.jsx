import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cut onion", completed: false }, 
  { text: "Take react intro course", completed: false }, 
  { text: "Do homework", completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
      />
      <TodoList>
        {todos.map(todo => (
          /* A unique key is added to identify the components within a list */
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
