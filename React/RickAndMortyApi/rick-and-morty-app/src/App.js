import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilaPersonaje from './FilaPersonaje';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results.slice(0, 10)); 
      } catch (err) {
        setError('No se pudo obtener la información de los personajes.');
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Personajes de Rick y Morty</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Imágenes</th>
            </tr>
          </thead>
          <tbody>
            {characters.map(personaje => (
              <FilaPersonaje key={personaje.id} personaje={personaje} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
