import { useState, useEffect } from 'react';
import {objetosLandingPage} from '../../../listaDeProductos.js';
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {
    const elparam = useParams();
    const [producto, setProducto] = useState({});
    let id = 3;
    useEffect(() => {
        console.log(elparam);
        console.log(elparam.prodid);
        const productoEncontrado = objetosLandingPage.find((item) => item.id === elparam.prodid);
        setProducto(productoEncontrado);
    }, [id]);

  return (
    <div>
      <h2>{producto.title}</h2>
      <h2>{producto.precio}</h2>
      <button>Agregar al carrito</button>
    </div>
  )
}
