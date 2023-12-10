import React, { useState, useEffect, useContext } from 'react';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from "firebase/firestore"
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { cart, total, clearCart } = useContext(CartContext)

    const controlForm = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Completar los campos requeridos")
            return;
        }
        if (email !== emailConfirm) {
            setError("Campos de Email no coinciden")
            return;
        }
        const db = getFirestore()

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        clearCart()
                    })
                    .catch(() => {
                        setError("Se produjo un error al crear la orden")
                    })
            })
            .catch(()=>{
                setError("No se pudo verificar el stock, intentelo en unos minutos")
            })
    }

    return (
        <div>
            <h2>Datos de contacto</h2>

            <form onSubmit={controlForm}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="number" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type='submit'>Confirmar compra</button>

                {
                    ordenId && (
                        <p>
                            Gracias por comprar en ExtremeTech
                            Numero de orden: {ordenId}
                        </p>
                    )


                }
            </form>


        </div>
    );
};

export default Checkout;