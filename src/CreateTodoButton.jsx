import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClikButton = () => {
    alert("Here the modal should be shown");
  };

  return (
    /* The function is sent without parentheses to show that it is not executed but it is the function that will be used */
    <button className="CreateTodoButton" onClick={onClikButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
