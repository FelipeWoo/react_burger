//Component

import React from 'react';
//props es para poder utilizar las propiedades del componente
const person = (props) => {
    return (
        <div>
            <p>Soy {props.name} y tengo {props.age} años.</p>
            <p>{props.children}</p>
        </div>
            );
};

export default person;