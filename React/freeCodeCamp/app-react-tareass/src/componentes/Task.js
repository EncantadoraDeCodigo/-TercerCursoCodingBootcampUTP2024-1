import React from "react";
import '../hojas-de-estilo/Task.css'
import { TiDeleteOutline } from "react-icons/ti";

function Task ({ id, texto, completada, completarTarea, EliminarTarea }){

    return(

        <div className= {completada ? 'tarea-contenedor  tarea-contenedor-completada' : 'tarea-contenedor'}>

            <div 
            className="tarea-texto" 
            onClick={()=> completarTarea(id)}>
                
                {texto}

            </div>

            <div 
            className="tarea-contenedor-iconos"
            onClick={()=>  EliminarTarea(id)}>
            <TiDeleteOutline className="tarea-icono"/>
            </div>
        </div>
    )
}

export default Task;
