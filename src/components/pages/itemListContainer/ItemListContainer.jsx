import "./itemListContainer.css";
import { Link, useParams } from "react-router";
import {db} from "../../../firebaseConfig"
import {addDoc, collection, getDocs, query, where} from "firebase/firestore"
import { useEffect, useState } from "react";

//const cargarProductos = () => {
  //let productsCollection = collection(db, "productos");
  //addDoc(productsCollection, {Objeto});
//};

export const ItemListContainer = () => {

   console.log('1');
  const {IdCategoria} = useParams();
  const [productos, setProductos] = useState([]);
  


  
 useEffect(() => {
    
  let productsCollection = collection(db, "productos");
  let prods = {};
    if(IdCategoria){      
      prods = query(productsCollection, where("categoria", "==", IdCategoria));
    }  
    else{
      prods = productsCollection;
    }

    let getProducts = getDocs(prods);
      
    getProducts.then((res) => {
      let arrayProductos = res.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      });
      setProductos(arrayProductos);
    });} , [IdCategoria]);


  return (
    <main>
      <h2>Lista de Productos</h2>
      <div className="product-container">
        {productos.map((item) => (
          <div className="product-card">
            <div className="product-info">
              <h3>{item.nombre}</h3>
              <img className="product-img" src={item.imageUrl}></img>
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