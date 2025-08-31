import React from 'react'
import { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import "./Counter.css"

export const Counter = ({product}) => {

    const {addToCart, cart} = useContext(CartContext);   
    const [contador, setContador] = useState(1);

    const sumar = () =>{
        if(contador < product.stock)setContador(contador + 1);
    }

    const restar = () =>{
        if(contador > 0)setContador(contador - 1);        
    }

    const agregarAlCarrito = () =>{
        let productoConCantidad = {...product, cantidad: contador};
        addToCart(productoConCantidad);
    }


  return (
    <div className='buttons-container'>
        <div className='counter-container'>
            <button onClick={restar} disabled={contador === 1}  className="product-btn">-</button>
            <h2>{contador}</h2>
            <button onClick={sumar} disabled={contador === product.stock}  className="product-btn">+</button>
        </div>
        <button onClick={agregarAlCarrito}  className="product-btn">Agregar al carrito</button>
    </div>
    
  )
}

export default Counter;
