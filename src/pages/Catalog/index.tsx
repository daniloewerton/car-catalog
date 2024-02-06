import './styles.css';

const Catalog = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Digite sua busca"></input>
      <a className="search-button">
        <h6>buscar</h6>
      </a>
    </div>
  );
};

export default Catalog;
