import React from 'react'
import { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContext.jsx';

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
        console.log(productoConCantidad);
        console.log(cart);
        addToCart(productoConCantidad);
    }


  return (
    <div>
        <button onClick={restar} disabled={contador === 1}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar} disabled={contador === product.stock}>+</button>
        <button onClick={agregarAlCarrito}  className="product-btn">Agregar al carrito</button>
    </div>
  )
}

export default Counter;
