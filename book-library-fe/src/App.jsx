import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/layouts/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />} />


      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;