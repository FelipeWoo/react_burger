//Agregar el css
import './UserOutput.css'

import React from 'react';
//props es para poder utilizar las propiedades del componente
const userOutput = (props) => {
    return (
        <div className='UserOutput'>

            <div className='p1'>
                <p>Párrafo 1</p>
            </div>
            
            <div className='p2'>
                <p>Párrafo 2</p>
            </div>
        </div>
    );
};

export default userOutput;