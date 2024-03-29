import './styles.css';
import CarImage from 'assets/images/car-card.png';
import PayButton from 'components/PayButton';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container"> 
                <img src={CarImage} alt="Nome do Produto"/>
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <PayButton />
            </div>
        </div>
    );
}

export default ProductCard;