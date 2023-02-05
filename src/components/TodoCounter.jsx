import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
    return <h2 className="TodoCounter">You have completed {completed} of {total} TODO's</h2>;
}

export { TodoCounter };