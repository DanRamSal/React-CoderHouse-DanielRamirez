import { useState, useEffect } from 'react';
import {objetosLandingPage} from '../../../listaDeProductos.js';
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    useEffect(() => {
        const productoEncontrado = objetosLandingPage.find((item) => item.id === Number(id));
        setProducto(productoEncontrado);
    }, [id]);

  return (
    <main>
      <div className="product-card">
        <div className="product-info">
          <h2>{producto.nombre}</h2>
          <h2>{producto.precio}</h2>
          <button className="product-btn">Agregar al carrito</button>
        </div>
      </div>
    </main>
  )
}
