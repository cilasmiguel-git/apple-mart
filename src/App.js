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
import { render } from '@testing-library/react';

function App() {
  expect(window.location.pathname).toEqual('/apple-mart')
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/apple-mart' element={<Home />}></Route>
        <Route exact path='/products' element={<Product />}></Route>
        <Route exact path='/products/:id' element={<ProductDetail />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/checkout' element={<Checkout />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;