import React from 'react'
import {createContext} from "react";
import {useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

const [cart, setCart] = useState([]);

//Para despues [JSON.parse(localStorage.getItem("cart"))] 

const removefromCart = (id) => {
    let arrayFiltrado = cart.filter(elemento => elemento.id !== id);
    setCart(arrayFiltrado);
};

const resetCart = () =>{
    setCart([]);
}

const addToCart = (producto) => {
    setCart([...cart, producto]);
};

const getTotalAmount = () => {
    if(cart.length === 0) return 0;
    let total = cart.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    return total;
}

const getTotalItems = () => {
    if(cart.length === 0) return 0;
    console.log(cart)
    let totalItems = cart.reduce((acc, producto) => acc + producto.cantidad, 0);
    return totalItems;
}

  return (
    <CartContext.Provider 
        value ={{
        cart: cart,
        addToCart: addToCart,
        removefromCart: removefromCart,
        resetCart: resetCart,
        getTotalAmount: getTotalAmount,
        getTotalItems: getTotalItems
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
