import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ({productId}) => {

    const [product, setProduct] = useState(null) 

    const {idProduct} = useParams()

        useEffect(() => {
            
            const db = getFirestore()
            const nuevoDoc = doc(db, "productos", idProduct)

            getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevoProducto = {id: res.id, ...data}
                setProduct(nuevoProducto)
            })
            .catch(error => console.log(error))

        }, [idProduct])
    
    return (
        <div>
            {
                product ? <ItemDetail producto={product}/> : <p> CARGANDO... </p>
            }
        </div>
    );
};

export default ItemDetailContainer;