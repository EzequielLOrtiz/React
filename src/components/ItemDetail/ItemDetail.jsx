import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ producto }) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }

    return (
        <>
            <div className='tarjeta'>
                <h2>{producto.nombre}</h2>
                <p>Marca: {producto.marca}</p>
                <p>Caracteristicas: {producto.caracteristicas}</p>
                <img src={producto.img} alt={producto.nombre} />
                <p>Stock: {producto.stock}</p>
                <p>Precio: {producto.precio}</p>

            </div>
            <div className='botones'>

                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />

            </div>
        </>
    );
};

export default ItemDetail;