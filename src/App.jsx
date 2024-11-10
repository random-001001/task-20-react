import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import img from "./assets/img.jpg";
import "./App.css";

const App = () => {
    const items = [
        { id: 1, name: "ASIAN Mens Thar-13 Sneaker", price: 120, img: img },
        { id: 2, name: "ASIAN Men's AIRWEAVE-02 Sports Shoes", price: 40, img: img },
        { id: 3, name: "ASIAN Men's Wonder-13 Sports Shoes", price: 50, img: img },
        { id: 4, name: "ASIAN Men's Bouncer-01 Sports Shoes", price: 60, img: img },
        { id: 5, name: "ASIAN Men's Cosco-02 Sports Shoes", price: 70, img: img },
        { id: 6, name: "ASIAN Men's Runner-03 Sports Shoes", price: 80, img: img },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <ProductList items={items} addToCart={addToCart} />
                <Cart cart={cart} setCart={setCart} />
            </div>
        </div>
    );
};

export default App;
