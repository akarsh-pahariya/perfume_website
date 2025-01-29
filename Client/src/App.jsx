import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
