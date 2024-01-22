import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark navbar-container">
      <div className="container-fluid">
        <a href="/" className="main-title">
          <h4>Carros Top</h4>
        </a>

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
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
