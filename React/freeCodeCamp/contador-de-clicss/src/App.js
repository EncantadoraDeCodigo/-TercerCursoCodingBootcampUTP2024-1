import './App.css';
import Logo from './photos/computer-mouse-logo-vector-template_306040-2552.png';
import Boton from './componentes/Boton';
import { useState } from 'react';
import Contador from './componentes/Contador';

function App() {

  const [counter, setCounter] = useState(0);
    
  const ElClick = () => {
      setCounter(counter + 1);
  }

  const reiniciarContador = () => {
    setCounter(0);
  }




  return (
    <div className="App">

      <div className='victoria-logo-contenedor'>
        <img className='victoria-logo'
        src= {Logo}
        alt='Logo de la pagina web'/>
        </div>
      

      <div className='contenedor-principal'>
      <Contador numeroDeClics= {counter} />

        <Boton texto= 'Clic'
        esBotonDeClic= {true}
        ElClick= {ElClick} />
          
        <Boton
          texto= 'Reiniciar'
          esBotonDeClic={false}
          ElClick={reiniciarContador}/>
      </div>
      
    </div>
  );
}

export default App;
