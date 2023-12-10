import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext);

    console.log(cart)
    return (
        <div className='carrito'>
            <h1>TU CARRITO</h1>

            {
                cart.length == 0 ?
                    <div>
                        <h3>Tu carrito está vacio...</h3>
                        <Link to={"/"}> <button>Volver al inicio </button> </Link>
                    </div>
                    :
                    <div>
                        {
                            cart.map((p) => (
                                <CartItem key={p.producto.id} cartItem={p} removeItem={removeItem} />
                            ))
                        }
                        <h3>Precio total: ${total}</h3>
                        <button onClick={()=>{clearCart()}}>Vaciar Carrito</button>
                        <Link to={"/checkout"}> <button>Finalizar compra</button> </Link>
                    </div>
            }

        </div>
    );
};

export default Cart;