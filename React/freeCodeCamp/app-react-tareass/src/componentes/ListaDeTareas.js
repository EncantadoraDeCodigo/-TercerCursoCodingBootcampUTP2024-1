import React, {useState} from 'react';
import TareaFormulario from './tareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Task from './Task';



function ListaDeTareas(){

    const [tareas, setTareas]= useState([]);

    const agregarTarea = Task => {
        
        if(Task.texto.trim()) {
            Task.texto = Task.texto.trim();
            const tareasUpdate = [Task, ...tareas];
            setTareas(tareasUpdate);
        }
    }

    const EliminarTarea = id => {
        const TareasUpdate= tareas.filter(tarea => tarea.id !== id);
        setTareas(TareasUpdate)
    }


    const completarTarea = id => {
        const TareasUpdate = tareas.map(Task => {
            if (Task.id === id){
                Task.completada = !Task.completada;
            }
            return Task;
        });

        setTareas(TareasUpdate);
    }


    return (
    <>
        <TareaFormulario onSubmit={agregarTarea} />

        

        <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) =>
                    <Task
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    EliminarTarea={EliminarTarea} />
                )
            }

        </div>
        </>
    )
}

export default ListaDeTareas;