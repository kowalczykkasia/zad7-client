import React from 'react';
import Category from './category'

function CategoryList({ categories, selectedCategory, selectCategory }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <Category item={category} 
                      isSelected={selectedCategory === category} 
                      selectCategory={selectCategory} />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CategoryList;