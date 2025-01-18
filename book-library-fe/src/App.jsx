import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/Cartcontext';
import { useLocation } from 'react-router-dom';
import Scroll from './components/layouts/Scroll/Scroll';
import Header from './components/layouts/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/layouts/Footer/Footer';
import Product from './components/pages/Product/Product';


const App = () => {
  const location = useLocation();

  const getBackground = () => {
    if (location.pathname === '/') return 'var(--bg-color)';
    return 'var(--main-color-100)';
  }

  return (
    <CartProvider>
      <div style={{ backgroundColor: getBackground(), minHeight: '100vh' }}>
        <Scroll />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />



        </Routes>

        <Footer />
      </div>

    </CartProvider>
  );
};

export default App;