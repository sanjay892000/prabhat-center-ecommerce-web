import Navbar from './component/navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shoping from './component/pages/Shoping';
import Login from './component/login_signup_page/Login';
import Signup from './component/login_signup_page/Signup';
import Carts from './component/pages/Carts';
import Footer from './component/footer/Footer';
import ShopCategory from './component/pages/ShopCategory';
import mens_banner from './component/myimg/banner_mens.png'
import womens_banner from './component/myimg/banner_women.png'
import kids_banner from './component/myimg/banner_kids.png'
import ShopContextProvider from './component/mycontext/ShopContext';
import ProductPage from './component/pages/ProductPage';

function App() {
  return (
    <>
    <ShopContextProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Shoping />} />
            <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='/product' element={<ProductPage/>}>
              <Route path=':productid' element={<ProductPage/>} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/carts' element={<Carts />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
