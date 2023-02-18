import React from 'react';
import '../styles/TodosLoading.css';

export const TodosLoading = (): JSX.Element => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">
        Loading TODOs...
      </p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};