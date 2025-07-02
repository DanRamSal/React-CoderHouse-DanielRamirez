import "./Navbar.css";
import { CartWidget } from "../cartwidget/cartWidget";  


export const Navbar = () => {
    return (
       <div>
            <h2>Tienda de TCG</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Yugioh</li>
                    <li>Pokemon</li>
                </ul>
                <CartWidget/>
            </nav>
       </div>
    );
} 