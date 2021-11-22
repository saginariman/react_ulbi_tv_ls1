import React from 'react';
import cl from './MyInput.module.css';

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} className={cl.myInput} {...props}/>
    )
});

export default MyInput
