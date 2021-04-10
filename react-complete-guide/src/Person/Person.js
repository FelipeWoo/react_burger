//Component


//Agregar el css
import './Person.css'

import React from 'react';
//props es para poder utilizar las propiedades del componente
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick = {props.click}>Soy {props.name} y tengo {props.age} años.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
            );
};

export default person;