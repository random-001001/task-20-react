import React from "react";
import "../App.css";

const Cart = ({ cart, setCart }) => {
    const increaseQuantity = (itemId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (itemId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id} className="cart-item">
                        <div>{item.name}</div>
                        <div className="item-controls">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="cart-total">Total: ${calculateTotal()}</p>
        </div>
    );
};

export default Cart;
