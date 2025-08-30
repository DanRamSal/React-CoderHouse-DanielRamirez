import React from 'react'
import { useState } from 'react'
import {db} from "../../../firebaseConfig"
import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import {addDoc, collection, doc, updateDoc} from "firebase/firestore"

export const Checkout = () => {

    const [user, setUser] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    const {cart, getTotalAmount, resetCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const handleSubmit = (evento)=>{
        evento.preventDefault();

        let total = getTotalAmount();
        
        let orden = {
            comprador: user,
            items: cart,
            total: total
        }

        let coleccionOrdenes = collection(db, "ordenes");
        let res = addDoc(coleccionOrdenes, orden);
        res.then((response) => {
            setOrderId(response.id)
            resetCart();
        }).catch((error) => console.log(error));

        let productsCollection = collection(db, "productos");

        cart.forEach((producto) => {
            let documento = doc(productsCollection, producto.id);
            updateDoc(documento, {stock:producto.stock - producto.cantidad});
        })
    }
    

    return (
        <div>
            {orderId ? <strong>Gracias por tu compra! Tu numero de orden es : {orderId}</strong> :
            <form onSubmit={handleSubmit}>
                <input name="nombre" type="text" placeholder="Nombre" onChange={(evento)=>setUser({...user, nombre:evento.target.value})}/>
                <input name="telefono" type="text" placeholder="telefono" onChange={(evento)=>setUser({...user, telefono:evento.target.value})}/>
                <input name="email" type="text" placeholder="email" onChange={(evento)=>setUser({...user, email:evento.target.value})}/>
                <button>Comprar</button>
            </form>
            }
        </div>
    )
}
