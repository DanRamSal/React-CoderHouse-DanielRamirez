import {Navbar} from './components/layout/navbar/Navbar.jsx';
import {Footer} from './components/layout/footer/Footer.jsx';
import {Carrito} from './components/cart/cart.jsx';
import {CustomButton} from './components/customButton/CustomButton.jsx';
import {ItemDetailContainer} from './components/pages/itemDetailContainer/itemDetailContainer.jsx';
import {objetosLandingPage} from './listaDeProductos.js';
import {ItemListContainer} from './components/pages/itemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route} from "react-router";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer itemList={objetosLandingPage} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detalle/:prodid" element={<ItemDetailContainer />} />
        <Route path = "*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
