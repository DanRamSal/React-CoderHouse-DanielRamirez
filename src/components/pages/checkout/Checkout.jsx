import React from 'react'
import { useState } from 'react'
import {db} from "../../../firebaseConfig"
import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import {addDoc, collection, doc, updateDoc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import "./Checkout.css"

export const Checkout = () => {

    const [user, setUser] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    const {cart, getTotalAmount, resetCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const pruebaToast = () => toast("Orden generada con exito");

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

        pruebaToast();
    }
    

    return (
        <div className='order-main-container'>
            {orderId ? <strong>Gracias por tu compra! Tu numero de orden es : {orderId}</strong> : 
            <form onSubmit={handleSubmit}>
                <div className="form-container"> 
                    <h2>Datos del Cliente</h2>
                    <input name="nombre" type="text" placeholder="Nombre" onChange={(evento)=>setUser({...user, nombre:evento.target.value})}/>
                    <input name="telefono" type="text" placeholder="telefono" onChange={(evento)=>setUser({...user, telefono:evento.target.value})}/>
                    <input name="email" type="text" placeholder="email" onChange={(evento)=>setUser({...user, email:evento.target.value})}/>
                    <button className="product-btn">Finalizar compra</button>                    
                </div>
            </form>
            }
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
        </div>
    )
}
