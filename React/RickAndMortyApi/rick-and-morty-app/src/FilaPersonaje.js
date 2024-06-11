import React from 'react';

const FilaPersonaje = ({ personaje }) => {
  return (
    <tr>
      <td>{personaje.name}</td>
      <td>
        <img src={personaje.image} alt={personaje.name} />
        <img src={personaje.image} alt={personaje.name} />
      </td>
    </tr>
  );
};

export default FilaPersonaje;

