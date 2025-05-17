import React from "react";
import Item from "./Item";

function ItemList({ items, addToCart }) {
    return (
      <div className="item-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => 
          <Item key={item.id} item={item} addToCart={addToCart} />
        )}
      </div>
    );
  }
export default ItemList;