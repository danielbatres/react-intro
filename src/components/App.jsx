import React from 'react';
import { AppUI } from './AppUI';

//const defaultTodos = [
//  { text: "Cut onion", completed: false },
//  { text: "Take react intro course", completed: false },
//  { text: "Do homework", completed: true }
//];

function useLocalStorage(itemName, initialValue) {
  /**
  * Within the custom hooks we can call the official React hooks
  */
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
    }, 1000);
  });
  
  const saveItem = newItem => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }
  
  return [item, saveItem];
}

function App() {
  /**
   * We use useState in the parent component of the application
   * to be able to send the state to all the child components.
   *
   * On the other hand, we are going to cause the components
   * to be affected with a re-rendering.
   */
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos);
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  /**
   * console.log('before useEffect');
   *
   *
   * It is called "useEffect" or secondary effect because we are telling React that
   * the component has to do something after rendering.
   *
   * React.useEffect(() => {
   *   console.log('useEffect');
   *
   * When we pass an empty array as the second parameter useEffect will only be
   * executed once.
   *
   * }, []);
   *
   * We send an element to the array that will indicate when it has to be
   * executed.
   *
   * }, [totalTodos]);
   *
   * console.log('after useEffect');
   */

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
