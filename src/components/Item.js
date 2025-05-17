import React from 'react'

function Item({ item, addToCart }) {
    return (
      <div className="item border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">Price: {item.price}</p>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    );
  }

export default Item;