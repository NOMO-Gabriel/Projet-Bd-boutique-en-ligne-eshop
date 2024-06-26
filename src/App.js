import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import ProductSinglePage from './pages/ProductSinglePage/ProductSinglePage';
import CategoryProductPage from './pages/CategoryProductPage';
import SearchPage from './pages/SearchPage/SearchPage';
import CartPage from './pages/CartPage/CartPage';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import { SidebarProvider } from './contexts/SidebarContext';
import AdminPage from './pages/AdminPage';
import SalesPage from './pages/AdminPage/SalesPage/SalesPage';
import AdminSettinsPage from './pages/AdminPage/Settings/Settings';
import MagasinierPage from './pages/AdminPage/Magasinier/Magasinier';
import MagasinerPage from './pages/MagasinerPage';
import MagasinerAdder from './pages/MagasinerPage/Add/Add';
import MagasinerSee from './pages/MagasinerPage/See/See';
import MagasinerHistory from './pages/MagasinerPage/History/History';
function App() {
  const location = useLocation();

  return(
    <SidebarProvider>
      <div className="App">
          { (!location.pathname.startsWith('/admin'))&&(!location.pathname.startsWith('/magasiner') )&&
            <>
              <Header />
              <Sidebar />
            </>
          }

          <Routes>
              {/* home page route */}
              <Route path = "/" element = {<HomePage />} />
                {/* admin page route */}
                <Route path="/admin" element={<AdminPage />}>
                  <Route path="sales" element={<SalesPage />} />
                  <Route path="settings" element={<AdminSettinsPage />} />
                  <Route path="magasiniers" element={<MagasinierPage />} />
                </Route>

                {/* magasiner page route */}
                <Route path="/magasiner" element={<MagasinerPage />}>
                  <Route path="addProducts" element={<MagasinerAdder />} />
                  <Route path="seeProducts" element={<MagasinerSee />} />
                  <Route path="history" element={<MagasinerHistory />} />
                </Route>
          
                {/* single product route */}
                <Route path = "/product/:codePro" element = {<ProductSinglePage />} />
                {/* category wise product listing route */}
                <Route path = "/category/:idCat" element = {<CategoryProductPage />} />
                {/* cart */}
                <Route path = "/cart" element = {<CartPage />} />
                {/* searched products */}
                <Route path = "/search/:searchTerm" element = {<SearchPage />} />
          </Routes>
      </div>
    </SidebarProvider>
  )
}

export default App;
