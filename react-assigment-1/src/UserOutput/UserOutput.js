//Agregar el css
import './UserOutput.css'

import React from 'react';
//props es para poder utilizar las propiedades del componente
const userOutput = (props) => {
    return (
        <div className='UserOutput'>


            <p className='UserName'>You user name is: <div className='user'>pedro69</div></p>
            <p className='Message'>If the username is incorrect, change it in the box below.</p>

        </div>
    );
};

export default userOutput;