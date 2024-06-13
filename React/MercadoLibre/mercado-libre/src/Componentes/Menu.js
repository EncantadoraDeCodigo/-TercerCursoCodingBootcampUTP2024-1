// Menu.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const renderCategories = (categories) => {
    return categories.map(category => (
      <div key={category.id}>
        <NavLink to={`/category/${category.id}`} onClick={() => toggleCategory(category.id)}>
          {category.name}
        </NavLink>
        {category.children_categories && category.children_categories.length > 0 && expandedCategories.includes(category.id) && (
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






