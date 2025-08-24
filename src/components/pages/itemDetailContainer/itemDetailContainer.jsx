import { useState, useEffect } from 'react';
import {objetosLandingPage} from '../../../listaDeProductos.js';
import { useParams } from 'react-router';
import {CartContext} from '../../../context/CartContext.jsx';
import {useContext} from 'react';
import {Counter} from '../../counter/Counter.jsx';


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
          <Counter product={producto}></Counter>
        </div>
      </div>
    </main>
  )
}
