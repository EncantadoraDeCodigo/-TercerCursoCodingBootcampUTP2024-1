import React from 'react';
import '../hojas-estilo/Contador.css';


//Va a contener el numero de clics
function Contador({numeroDeClics}){
    return(
        <div className='contador'>
            {
                numeroDeClics
            }

        </div>
    )
};

export default Contador;