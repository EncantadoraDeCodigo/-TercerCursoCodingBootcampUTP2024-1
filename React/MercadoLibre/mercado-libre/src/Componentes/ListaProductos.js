// ListaProductos.js
import React from 'react';

const ListaProductos = ({ products }) => {
  // Aquí deberías filtrar los productos según la categoría seleccionada
  // Puedes obtener la categoría seleccionada del parámetro de la ruta
  // Por ejemplo, usando useParams() de react-router-dom
  
  return (
    <div className="lista-producto">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Precio: {product.price}</p>
          <a href={product.permalink} target="_blank" rel="noopener noreferrer">Ver en Mercado Libre</a>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;


