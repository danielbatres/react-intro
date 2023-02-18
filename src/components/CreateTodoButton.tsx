import React from "react";
import "../styles/CreateTodoButton.css";

export const CreateTodoButton= ({ setOpenModal }): JSX.Element => {
  const onClikButton = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    /* In this case the function receives arguments so it is wrapped in an anonymous function to be used */
    <button
      className="CreateTodoButton"
      onClick={onClikButton}
    >
      +
    </button>
  );
};
