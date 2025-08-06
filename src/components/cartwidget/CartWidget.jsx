import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div>
      <BsFillCartFill/>
      <span className="cart-badge">0</span>
    </div>
  )
}
