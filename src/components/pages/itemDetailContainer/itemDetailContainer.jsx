import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {db} from "../../../firebaseConfig"
import {addDoc, collection, getDoc, query, where, doc} from "firebase/firestore"
import {CartContext} from '../../../context/CartContext.jsx';
import {useContext} from 'react';
import {Counter} from '../../counter/Counter.jsx';


export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {

    let productsCollection = collection(db, "productos");
    let prod = {};    
    prod = doc(productsCollection, id);    
    let getProduct = getDoc(prod);      
    getProduct.then((res) => {
      setProducto({id: res.id, ...res.data()});
      });         
    }, [id]);

  return (
    <main>
      <div className="product-card">
        <div className="product-info">
          <h2>{producto.nombre}</h2>
          <h2>Precio: ${producto.precio}</h2>
          <img className="product-img" src={producto.imageUrl}></img>
          <Counter product={producto}></Counter>
        </div>
      </div>
    </main>
  )
}
