import {Navbar} from './navbar/Navbar.jsx';
import {Footer} from './footer/Footer.jsx';
import {CustomButton} from './customButton/CustomButton.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <h2>Hola desde React</h2>
        <CustomButton texto = {"Boton del Main"}></CustomButton>
      </main>
      <Footer />
    </div>
  );
}

export default App
