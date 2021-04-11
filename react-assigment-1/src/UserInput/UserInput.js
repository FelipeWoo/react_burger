//Agregar el css
import './UserInput.css'

import React from 'react';
//props es para poder utilizar las propiedades del componente
const userInput = (props) => {
    return (
        <div className='UserInput'>
            <input type='text' onChange={props.changed} value={props.currentName} />
        </div>
    );
};

export default userInput;