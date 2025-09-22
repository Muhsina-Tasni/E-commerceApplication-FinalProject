

import {  Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductList from "../pages/Products/ProductList";
import ProtectedRoute from "../routes/ProtectedRoutes";
import CartPage from "../pages/Cart/CartPage";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    
   
    <BrowserRouter>
       <Navbar/>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />


      </Routes>
   <Footer/>
    </BrowserRouter>
    
   
  );
};

export default AppRoutes;
