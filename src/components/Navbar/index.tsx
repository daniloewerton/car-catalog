import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-light navbar-container">
      <div className="container-fluid">
        <Link to="/" className="main-title">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobile-menu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse main-menu" id="mobile-menu">
          <ul className="navbar-nav offset-md-2 main-menu-itens">
            <li>
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
