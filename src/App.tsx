import './assets/styles/custom.scss';
import Navbar from 'components/Navbar';
import './App.css';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Card from 'components/Card';

const App = () => {
  
  return (
    <>
      <Navbar />
      <Catalog />
      <Card />
    </>
  );
}

export default App;
