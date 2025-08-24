import React from 'react'
import { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContext.jsx';

export const Counter = ({product}) => {

    const {addToCart} = useContext(CartContext);   
    const [contador, setContador] = useState(0);

    const sumar = () =>{
        if(contador < product.stock)setContador(contador + 1);
    }

    const restar = () =>{
        if(contador > 0)setContador(contador - 1);        
    }

    const agregarAlCarrito = () =>{
        let productoConCantidad = {...producto, cantidad: contador};
        addToCart(producto);
    }


  return (
    <div>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={() =>{addToCart(producto);}} className="product-btn">Agregar al carrito</button>
    </div>
  )
}

export default Counter;
