import './styles.css';

const SearchBox = () => {
  return (
    <div className="container search-container">
      <input type="text" placeholder="Digite sua busca"></input>
      <a className="search-button" href="/">
        <h6>buscar</h6>
      </a>
    </div>
  );
};

export default SearchBox;