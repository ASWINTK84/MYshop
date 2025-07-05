import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Navb from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';


export default function App() {
  return (
    <BrowserRouter>
     <div className='sticky top-0 z-50'><Navb /></div>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
