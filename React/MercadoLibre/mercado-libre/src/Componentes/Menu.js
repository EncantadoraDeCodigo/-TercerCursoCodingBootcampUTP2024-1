import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ categories }) => {
  const renderCategories = (categories) => {
    return categories.map(category => (
      <div key={category.id}>
        <NavLink to={`/category/${category.id}`}>
          {category.name}
        </NavLink>
        {category.children_categories && category.children_categories.length > 0 && (
          <div className="sub-menu">
            {renderCategories(category.children_categories)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="menu">
      <NavLink to="/">Todos</NavLink>
      {renderCategories(categories)}
    </div>
  );
};

export default Menu; 



