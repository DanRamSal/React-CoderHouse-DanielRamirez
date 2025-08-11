import "./itemListContainer.css";
import { Link } from "react-router";

export const ItemListContainer = (props) => {
  return (
    <main>
      <h2>Lista de Productos</h2>
      <div className="product-container">
        {props.itemList.map((item) => (
          <div className="product-card">
            <div className="product-info">
              <h3>{item.nombre}</h3>
              <p className="product-price">Precio: ${item.precio}</p>
              <Link to={`/detalle/${item.id}`}>
                <button className="product-btn">Detalle del Producto</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}