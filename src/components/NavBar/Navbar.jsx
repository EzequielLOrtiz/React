import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const enlaces = ['Inicio', 'Contacto', 'Ubicacion'];

  const productos = ["Mouse", "Teclado", "HeadSet", "Monitor", "MousePad"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='navbar'>
      <Link to="/">
        <p>ExtremeTech</p>
      </Link>
      <ul>

        {/* crea los enlaces partiendo del array enlaces */}

        {enlaces.map((e, id) => (
          <li key={id}>
            <Link to={e === 'Inicio' ? '/' : `/${e.toLowerCase()}`}>
              {e}
            </Link>
          </li>
        ))}

        <li className="dropdown">
          <Link to={"/"}>
            <span onClick={handleDropdownToggle} className="dropdown-toggle">
              Productos
            </span>
          </Link>

          {dropdownOpen && (
            <ul className="dropdown-menu">

              {/* crea la lista de productos desde el array productos */}

              {productos.map((categoria, index) => (

                <li key={index}>
                  <Link to={`/${categoria}`}>{categoria}</Link>
                </li>

              ))}

            </ul>
          )}
        </li>

      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;