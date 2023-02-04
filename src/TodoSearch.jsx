import React from 'react';
import "./TodoSearch.css";

const TodoSearch = () =>{
    /**
     * useState returns a two positions array.
     * The state variable and the function to change that state.
     * The initial state is received as an argument.
     * 
     * Every time the state changes the component is rendered again.
     */ 
    const [state, setState] = React.useState('empty');

    const onSearchValueChange = (event) => {
        setState(event.target.value);
    }
    
    return (
        <>
            <input className='TodoSearch' placeholder="Onion" onChange={onSearchValueChange}/>
            <p>{state}</p>
        </>
    );
}

export { TodoSearch };