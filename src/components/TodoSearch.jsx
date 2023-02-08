import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "./TodoContext";

/**
 * We destructure the props object to receive only
 * it's properties by parameters
 */
const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  /**
   * useState returns a two positions array.
   * The state variable and the function to change that state.
   * The initial state is received as an argument.
   *
   * Every time the state changes the component is rendered again. 
   *
   * const [searchValue, setSearchValue] = React.useState('');
   */

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  /**
   * "The only source of the truth" - controlled components
   *
   * React components that render a form also control what happens to that
   * form with subsequent user input.
   *
   * value={state}
   *
   * Read more about this in "https://en.reactjs.org/docs/forms.html"
   */
  return (
    <input
      className="TodoSearch"
      placeholder="Onion"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };
