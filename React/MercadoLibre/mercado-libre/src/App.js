import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Componentes/Menu';
import ListaProductos from './Componentes/ListaProductos';
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
        
        <div className="menu">
          <Menu categories={categories} />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<ListaProductos products={data && data.results} />} />
            {categories.map(category => (
              <Route key={category.id} path={`/category/${category.id}`} element={<ListaProductos products={data && data.results.filter(product => product.category_id === category.id)} />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
      
















