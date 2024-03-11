import React from 'react';
import classes from './NewInput.module.css'

const NewInput = (props) => {
    return (
        <input className={classes.newInput} {...props}/>
    );
};

export default NewInput;