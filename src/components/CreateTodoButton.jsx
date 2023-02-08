import React from "react";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal }) => {
  const onClikButton = () => {
    setOpenModal(true);
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

export { CreateTodoButton };
