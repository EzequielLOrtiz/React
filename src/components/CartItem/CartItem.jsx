import React from 'react';

const CartItem = ({cartItem, removeItem}) => {

    return (
        <div>
            <img src={cartItem.producto.img} alt={cartItem.producto.nombre} />
            <h2>{cartItem.producto.nombre}</h2>
            <p>Precio unitario: $ {cartItem.producto.precio}</p>
            <p>Stock disponible: {cartItem.producto.stock}</p>
            <p>Detalle: {cartItem.producto.caracteristicas}</p>
            <p>Cantidad: {cartItem.cantidad}</p>
            <p>Precio total: ${cartItem.cantidad*cartItem.producto.precio}</p>
            
            <button onClick={() => removeItem(cartItem.producto.id)}>Eliminar producto</button>
        </div>
    );
};


export default CartItem;



