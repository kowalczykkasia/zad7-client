import React from "react";

function Cart({ cartItems, removeFromCart, handlePayment}) {
  return (
    <div className="cart border p-4">
      <h2 className="text-xl mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                {item.name} ({item.quantity})
                <button className="text-red-500" onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handlePayment}>Pay Now</button>
        </>
      )}
    </div>
  );
}

export default Cart;