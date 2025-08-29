import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

export const Carrito = () => {

  const {cart, resetCart, removefromCart} =  useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {
        cart.map( producto => {
          return <div key={producto.id}> 
            <h2>{producto.title}</h2>
            <h2>{producto.nombre}</h2>
            <button onClick={() => removefromCart(producto.id)}>Eliminar</button>
          </div>
        })
      }
      <p>Aquí se mostrarán los productos agregados al carrito.</p>
      <p>El total a pagar es: 20</p>
      <button onClick={resetCart}>Vaciar Carrito</button>
      <Link to= "/checkout">Finalizar compra</Link>
    </div>
  )
}
