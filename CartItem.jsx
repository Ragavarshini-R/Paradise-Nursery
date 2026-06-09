import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>

      <div>
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
