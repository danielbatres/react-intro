import React from "react";
import "./TodoSearch.css";

/**
 * We destructure the props object to receive only
 * it's properties by parameters
 */
const TodoSearch = ({ searchValue, setSearchValue }) => {
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
   * Read more about this is "https://en.reactjs.org/docs/forms.html"
   */
  return (
    <input
      className="TodoSearch"
      placeholder="Onion"
      value="searchValue"
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };
