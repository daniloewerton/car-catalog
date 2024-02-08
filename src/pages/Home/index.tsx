import { Link } from 'react-router-dom';
import './styles.css';
import CarHeader from 'assets/images/car-header.svg';

const Home = () => {
  return (
    <div className="container">
      <div className="content-container">
        <div>
          <h3>O carro perfeito para você</h3>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>

        <div className="image-container">
          <img src={CarHeader} alt=""></img>
        </div>
      </div>

      <div className="secundary-container">
        <Link className="button-catalog" to="/catalog">Ver catálogo</Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
