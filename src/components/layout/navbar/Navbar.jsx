import "./Navbar.css";
import { CartWidget } from "../../cartwidget/CartWidget.jsx"; 
import { Link } from "react-router";


export const Navbar = () => {
    return (
       <div>
            <nav  className="navbar"> 
                <ul className="navbar-links">
                <Link to = "/">
                    <li>Home</li>
                </Link>
                <Link to = "/categoria/Yugioh">    
                    <li>Yugioh</li>
                </Link>
                <Link to = "/categoria/Pokemon">
                    <li>Pokemon</li>
                </Link>
                </ul>
                <Link to = "/carrito">
                    <CartWidget/>
                </Link>
            </nav>
       </div>
    );
} 