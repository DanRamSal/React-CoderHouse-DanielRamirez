import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router';
import "./cart.css"

export const Carrito = () => {

  const {cart, resetCart, removefromCart, getTotalAmount} =  useContext(CartContext);

  let totalCarrito = getTotalAmount();
  let totalConFormato = new Intl.NumberFormat('en-US').format(totalCarrito);

  return (
    <div className="main-container">
      <h2>Carrito de Compras</h2>
      {
        cart.map( producto => {
          return <div key={producto.id} className="checkout-product-container"> 
          <div className='image-and-title-cont'>
            <h2>{producto.nombre}</h2>
            <img className="checkout-product-img" src={producto.imageUrl}></img>
          </div>
            <h2>Precio : ${new Intl.NumberFormat('en-US').format(producto.precio)}</h2>
            <h2>Cantidad : {producto.cantidad}</h2> 
            <button onClick={() => removefromCart(producto.id)} className="product-btn">Eliminar</button>
          </div>
        })
      }
      {cart.length > 0 && <h2>El total a pagar es: ${totalConFormato}</h2>}
      {cart.length > 0 &&  <Link to= "/checkout">Finalizar compra </Link>}
      {cart.length > 0 && <button onClick={resetCart} className="product-btn">Vaciar Carrito</button>}
      {cart.length === 0 && <h2>El carrito esta vacio - Por favor agregue productos</h2>}
    </div>
  )
}
