import "./itemListContainer.css";
import { Link, useParams } from "react-router";
import {db} from "../../../firebaseConfig"
import {addDoc, collection, getDocs, query, where} from "firebase/firestore"
import { useEffect, useState } from "react";

//const cargarProductos = () => {
  //let productsCollection = collection(db, "productos");
  //addDoc(productsCollection, {Objeto});
//};

export const ItemListContainer = (props) => {

  const {IdCategoria} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if(IdCategoria){
      const productosFiltrados = props.itemList.filter((item) => item.categoria === IdCategoria);
      setProductos(productosFiltrados);
    } else {
      setProductos(props.itemList);
    }
  }, [IdCategoria, props.itemList]);

  //let productsCollection = collection(db, "productos");
  //let filtrado = query(productsCollection, where("categoria", "==", "pokemon"));
  //let getProducts = getDocs(productsCollection);
  //getProducts.then((res) => {
  //    let arrayProductos = res.docs.map((doc) => {
  //      return {id: doc.id, ...doc.data()}
  //    });
  //});

  return (
    <main>
      <h2>Lista de Productos</h2>
      <div className="product-container">
        {productos.map((item) => (
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