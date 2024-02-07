import PayButton from 'components/PayButton';
import './styles.css';
import CarCard from 'assets/images/car-card.png';

const Card = () => {
  return (
    <div className="container card-container">
      <div className="image-container">
        <img src={CarCard}></img>
      </div>

      <div className="content-card">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <PayButton />
      </div>
    </div>
  );
};

export default Card;
