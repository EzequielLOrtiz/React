import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {BiCart} from "react-icons/bi";
import "./cartWidget.css";
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)

    return (
        <Link to={"/carrito"} className="cart-link">
             <BiCart className="cart-icon" />
            <p>{cantidadTotal}</p>
        </Link>     
    );
};

export default CartWidget;