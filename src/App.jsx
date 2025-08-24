import {Navbar} from './components/layout/navbar/Navbar.jsx';
import {Footer} from './components/layout/footer/Footer.jsx';
import {Carrito} from './components/cart/cart.jsx';
import {ItemDetailContainer} from './components/pages/itemDetailContainer/itemDetailContainer.jsx';
import {objetosLandingPage} from './listaDeProductos.js';
import {ItemListContainer} from './components/pages/itemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route} from "react-router";
import CartContextProvider from './context/CartContext.jsx';

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer itemList={objetosLandingPage} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path = "*" element={<h1>404 Not Found</h1>} />\
      </Routes>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App
