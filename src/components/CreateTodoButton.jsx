import React from "react";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClikButton = (msg) => {
    alert(msg);
  };

  return (
    /* In this case the function receives arguments so it is wrapped in an anonymous function to be used */
    <button
      className="CreateTodoButton"
      onClick={() => onClikButton("Here the modal should be shown")}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
