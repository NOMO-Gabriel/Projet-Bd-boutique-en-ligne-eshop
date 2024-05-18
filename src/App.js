import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductSinglePage from './pages/ProductSinglePage/ProductSinglePage';
import CategoryProductPage from './pages/CategoryProductPage/CategoryProductPage';
import SearchPage from './pages/SearchPage/SearchPage';
import CartPage from './pages/CartPage/CartPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {CartProvider} from './Contexts/CartContext';
import Test from './Test'; 

function App() {
  return(
    <div className="App">
        <BrowserRouter>
          <Header />
        <CartProvider>
          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<HomePage />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSinglePage />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProductPage />} />
            {/* cart */}
            <Route path = "/cart" element = {<CartPage />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<SearchPage />} />


            <Route path = "/test" element = {<Test/>} />
          </Routes>
        </CartProvider>

        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;
