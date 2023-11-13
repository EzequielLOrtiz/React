import React from 'react';
import {BiCart} from "react-icons/bi";
import "./cartWidget.css";


const CartWidget = () => {
    return (
        <a href="http://" className="cart-link">
            <BiCart className="cart-icon" />
        </a>
    );
};

export default CartWidget;