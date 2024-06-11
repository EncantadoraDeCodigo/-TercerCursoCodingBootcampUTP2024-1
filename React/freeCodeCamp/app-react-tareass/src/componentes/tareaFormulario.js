import React, {useState} from 'react';
import '../hojas-de-estilo/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
import { TbRuler } from 'react-icons/tb';

//Se define el componente funcional que recibe props como parametro

function TareaFormulario(props){
//Declaracion de variables de estado input y setInput
    const [input, setInput] = useState('');

    //e es el objeto de evento que se pasa a la funcion de manejracambio, cuadno el evento onChange se dispara
    //Cada vez que hay una cambio en el valor, como escribir en el campo
    const manejarCambio = e => {
        setInput(e.target.value); /*Muestra el valor actual del campo de texto- Extraer el valor del campo de texto que ingresó  el user*/

    }

    //Esta función actualiza el estado de input
    const manejarEnvio = e => {  
        e.preventDefault(); //Evitar que la pagina recarge al enviar el formulario

        const TareaNueva = {
            id: uuidv4(),
            texto: input,  //Asigna lo ingresado por el user a la propiedad texto
            completada: false //Indica que la nueva tarea no está completada
        }
        props.onSubmit(TareaNueva);
    }

    //Esto es lo que se debe renderizar:
    return(

        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>

            <input //Rendeerizar un campo de entrada de texto
            className="tarea-input"
            type="text"
            placeholder= "Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
            />

            <button 
            className="tarea-boton">
            Add Task
            </button>

        </form>
    )
}

// el botón "Add Task" para agregar una nueva tarea, se desencadena el evento de envío del formulario, lo que a su vez activa manejarEnvio


export default TareaFormulario;