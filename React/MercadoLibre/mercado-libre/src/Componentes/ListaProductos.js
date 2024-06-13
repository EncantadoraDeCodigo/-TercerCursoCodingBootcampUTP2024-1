import React from 'react';

const ListaProductos = ({ products }) => {
  return (
    <div className="lista-producto">
      {products && products.map(product => (
        <div className="el-producto" key={product.id}>
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

