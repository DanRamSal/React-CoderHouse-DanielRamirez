import "./Navbar.css";
import { CartWidget } from "../../cartwidget/cartWidget";  
import { Link } from "react-router";


export const Navbar = () => {
    return (
       <div>
            <nav  className="navbar"> 
                <ul className="navbar-links">
                <Link to = "/">
                    <li>Home</li>
                </Link>    
                    <li>Yugioh</li>
                    <li>Pokemon</li>
                </ul>
                <Link to = "/carrito">
                    <CartWidget/>
                </Link>
            </nav>
       </div>
    );
} 