import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {

    const [quantity, setQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(producto, cantidad)
    }

    return (
        <>
            <div className='tarjeta'>
                <h2>{producto.nombre}</h2>
                <p>Marca: {producto.marca}</p>
                <p>Caracteristicas: {producto.caracteristicas}</p>
                <img src={producto.img} alt={producto.nombre} />
                <p>Stock: {producto.stock}</p>
                <p>Precio: $ {producto.precio}</p>

                <div className='botones'>
                    {quantity == 0 ?
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                        :
                        <CartWidget />
                    }
                </div>
            </div>
        </>
    );
};

export default ItemDetail;