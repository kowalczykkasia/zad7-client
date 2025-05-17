import React from 'react'

function Category({ item, isSelected, selectCategory }) {
    return (
      <button
      className={`text-blue-500 hover:underline ${isSelected ? 'font-bold' : ''}`}
      onClick={() => selectCategory(item)}>{item.name}
      </button>
    );
  }

export default Category;