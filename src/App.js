import './app.scss'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/singleProduct/SingleProduct';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
