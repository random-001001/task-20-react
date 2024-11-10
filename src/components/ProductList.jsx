import React from "react";
import "../App.css";
const ProductList = ({ items, addToCart }) => {
    return (
        <div className="items-container">
            {items.map(item => (
                <div key={item.id} className="item-card">
                    <img src={item.img} alt={item.name} className="item-image" />
                    <div className="item-details">
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
