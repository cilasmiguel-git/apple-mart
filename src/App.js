import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;