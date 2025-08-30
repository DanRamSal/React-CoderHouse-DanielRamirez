import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router';

export const Carrito = () => {

  const {cart, resetCart, removefromCart, getTotalAmount} =  useContext(CartContext);

  let totalCarrito = getTotalAmount();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {
        cart.map( producto => {
          return <div key={producto.id}> 
            <h2>{producto.title}</h2>
            <h2>{producto.nombre}</h2>
            <h2>Precio : ${producto.precio}</h2>
            <h2>Cantidad : {producto.cantidad}</h2>
            <p>El total a pagar es: {totalCarrito}</p>
            <button onClick={() => removefromCart(producto.id)}>Eliminar</button>
            {cart.length === 1 &&  <Link to= "/checkout">Finalizar compra </Link>}
          </div>
        })
      }
      <button onClick={resetCart}>Vaciar Carrito</button>
    </div>
  )
}
