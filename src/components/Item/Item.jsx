import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';


const Item = ({ product }) => {


    return (
        <>
            <div className='tarjeta'>
                <Link to={`/item/${product.id}`}>
                    <div className='contenedor'>
                        <h1>{product.nombre}</h1>
                        <img src={product.img} alt={product.nombre} />
                        <p>Precio: $ {product.precio}</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Item;