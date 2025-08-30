import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export const CartWidget = () => {
  const {car, getTotalItems} = useContext(CartContext);

  let cartQTY = getTotalItems();
  
  return (
    <div>
      <BsFillCartFill/>
      <span className="cart-badge">{cartQTY}</span>
    </div>
  )
}
