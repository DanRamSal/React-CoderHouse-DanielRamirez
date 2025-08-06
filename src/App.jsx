import {Navbar} from './components/layout/navbar/Navbar.jsx';
import {Footer} from './components/layout/footer/Footer.jsx';
import {Carrito} from './components/cart/cart.jsx';
import {CustomButton} from './components/customButton/CustomButton.jsx';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route} from "react-router";

function App() {

  const objetosLandingPage = [{id: 1, nombre: "Producto 1", precio: 100},    
                              {id: 2, nombre: "Producto 2", precio: 200},
                              {id: 3, nombre: "Producto 3", precio: 300}];

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer itemList={objetosLandingPage} />} />
        <Route path="/carrtio" element={<Carrito />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
