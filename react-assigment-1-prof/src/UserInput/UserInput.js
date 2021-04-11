import React from 'react';

//props make possible to listen changes
const userInput = (props) =>{
    //Local style setup, in line style
    const inputStyle = {
        border: '2px solid red'
    };
    return <input 
    type='text' 
    style={inputStyle}
    onChange={props.changed}
    value={props.currentName} />
};

export default userInput;