import { Routes, Route } from "react-router-dom";
import { Home, Wishlist, Products, Cart } from "../pages";

const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export { NavRoutes };
