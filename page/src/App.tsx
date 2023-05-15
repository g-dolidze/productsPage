import "./App.css";
import NavBar from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import Favorites from "./components/favorites";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
