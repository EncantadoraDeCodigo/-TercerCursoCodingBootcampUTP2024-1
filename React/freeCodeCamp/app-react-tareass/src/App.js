import Logo from './photos/tareaslogo.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App(){

  return(
    <div className='App-tareas'>

        <div className='vicky-logo-contenedor'>

            <img className='vicky-logo'
            src={Logo}
            alt='Logo de la pagina'/>

        </div>

        <div className='tareas-lista-principal'>
          <h1>My Task</h1>
          <ListaDeTareas/>                                            
        </div>

    </div>
  );
};

export default App;
