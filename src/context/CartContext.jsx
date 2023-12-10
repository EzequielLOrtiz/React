import React, { useState, createContext } from 'react';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [itemsCart, setItemsCart] = useState(0)

    const addToCart = (producto, cantidad) => {
        const isInCart = cart.find(prod => prod.producto.id === producto.id);
    
        if (!isInCart) {
            setCart(prev => [...prev, { producto, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + producto.precio * cantidad);

        } else {
            const carritoAct = cart.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
    
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + producto.precio * cantidad);
            setCart(carritoAct);
        }
    };
    

    const removeItem = (id) => {
        const productoEliminado = cart.find(prod => prod.producto.id === id);

        if (productoEliminado) {
            const filterCart = cart.filter(prod => prod.producto.id !== id);

            setTotal(prev => prev - productoEliminado.producto.precio * productoEliminado.cantidad);
            setCantidadTotal(prev => prev - productoEliminado.cantidad);
            setCart(filterCart);
        }
    }

    const clearCart = () => {
        setCart([])
        setCantidadTotal(0)
        setTotal(0)
    }

    const countItemsCart = (cart) => {
        setItemsCart(cart.lenght)
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                total,
                cantidadTotal,
                setCart,
                addToCart,
                removeItem,
                clearCart,
                countItemsCart
            }
        }>
            {children}
        </CartContext.Provider>
    );
};
