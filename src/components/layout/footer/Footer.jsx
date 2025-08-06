import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
        <div className="footer-section">
          <h4>Nosotros</h4>
          <p>La mejor tienda de cartas</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@tienda.com</p>
          <p>Telefono: 7152027</p>
        </div>
        <div className="footer-section">
          <h4>Siguenos</h4>
          <p>
            <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tienda de cartas. Derechos reservados.
      </div>
    </footer>
  )
}
