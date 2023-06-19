import { Route, Routes, useNavigate } from "react-router-dom";

import NavBar from "./components/navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import Favorites from "./components/favorites";
import CustomSeparator from "./components/crampt";
import Registration from "./pages/registarion";
import "./App.css";
import Profile from "./pages/profile";
import "./translations/index";
import Checkout from "./pages/checkout";
import Footer from "./components/footer";
import BrandsPage from "./pages/brands";
import { isUserAuthenticated } from "./Helpers/user/isUserAuth";
import AdminPage from "./admin/Page/adminPage";
import AdminNavbar from "./admin/components/navbar/AdminNavbar";
import { useEffect } from "react";

function App() {
  const { isAdmin } = isUserAuthenticated();

  return isAdmin ? (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </>
  ) : (
    <>
      <NavBar />
      <CustomSeparator />

      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="brand/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brand" element={<BrandsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
