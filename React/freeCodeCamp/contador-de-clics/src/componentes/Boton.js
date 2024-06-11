import React, {useState} from 'react';
import '../hojas-estilo/Boton.css';

function Boton({texto, esBotonDeClic, ElClick}){

    
        return (
            <div>
                <button className={esBotonDeClic ? 'boton-clic': 'boton-reiniciar'} 
                onClick={ElClick}>
                {texto}
                </button>
                
            </div>
        );
    }
    
    export default Boton;
    
