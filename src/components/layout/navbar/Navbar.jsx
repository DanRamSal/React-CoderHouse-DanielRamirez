import "./Navbar.css";
import { CartWidget } from "../../cartwidget/cartWidget";  


export const Navbar = () => {
    return (
       <div>
            <nav  className="navbar"> 
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>Yugioh</li>
                    <li>Pokemon</li>
                </ul>
                <CartWidget/>
            </nav>
       </div>
    );
} 