import './assets/styles/custom.scss';
import Navbar from 'components/Navbar';
import './App.css';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';

const App = () => {
  
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  );
}

export default App;
