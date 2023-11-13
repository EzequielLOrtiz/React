import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contacto</h2>
            <p>Dirección: Avenida Siempreviva 742, Springfield</p>
            <p>Email: extremetech@extremetech.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Enlaces Útiles</h2>
            <ul>
              <Link to={"/"}>
              <li>Inicio</li>
              </Link>
              <Link to={"/"}>
              <li>Productos</li>
              </Link>
              <Link to={"/contacto"}>
              <li>Contacto</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 ExtremeTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
