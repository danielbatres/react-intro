import React from 'react';

/* Adding inline styles */
const styles = {
    color: "red",
    backgroundColor: "yellow",
};

const TodoCounter = () => {
    /* An object is added */
    return <h2 style={styles}>You have completed 2 of 3 TODO's</h2>;
}

export { TodoCounter };