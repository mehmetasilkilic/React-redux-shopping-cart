import './app.scss'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import SingleProduct from './pages/singleProduct/SingleProduct';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <SingleProduct />
      <Footer />
    </div>
  );
}

export default App;
