// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Cut onion", completed: false }, 
  { text: "Take react intro course", completed: false }, 
  { text: "Do homework", completed: false }
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          /* A unique key is added to identify the components within a list */
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
