import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export const CartWidget = () => {
  const {cart} = useContext(CartContext);
  return (
    <div>
      <BsFillCartFill/>
      <span className="cart-badge">{cart.length}</span>
    </div>
  )
}
