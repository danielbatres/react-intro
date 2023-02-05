import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: "Cut onion", completed: false }, 
  { text: "Take react intro course", completed: false }, 
  { text: "Do homework", completed: true }
];

function App() {
  /**
   * We use useState in the parent component of the application
   * to be able to send the state to all the child components.
   *
   * On the other hand, we are going to cause the components
   * to be affected with a re-rendering.
   */
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  /**
   * It is important to mention the ASI (automatic semicolon insertion).
   *
   * When we use JSX and we have several lines of code we must enclose it
   * in parentheses to avoid problems with the ASI.
   *
   * Read more here "https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi"
   */
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export { App };
