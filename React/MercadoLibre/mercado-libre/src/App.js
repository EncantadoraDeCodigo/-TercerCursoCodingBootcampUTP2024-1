// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Componentes/Menu';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const categoryValues = data.available_filters.find((filter) => filter.id === 'category').values;
        setCategories(categoryValues);
      });
  }, []);

  return (
    
    <Router>
      <h1>Mercado Libre</h1>
      <div className="App">
        

        <Menu categories={categories} />

        <div className='card'>
          {data && data.results.map((product) => (
            <div className='el-producto' key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Precio: {product.price}</p>
              <a href={product.permalink} target="_blank" rel="noopener noreferrer">Ver en Mercado Libre</a>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;















