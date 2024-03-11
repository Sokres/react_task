import React from 'react';
import classes from './MyBtn.module.css'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn} >
            {children}
        </button>
    );
};

export default Button;