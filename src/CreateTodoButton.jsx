import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClikButton = () => {
    alert("Here the modal should be shown");
  };

  return (
    <button className="CreateTodoButton" onClick={onClikButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
