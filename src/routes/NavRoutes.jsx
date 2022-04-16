import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { Cart } from "../pages/Cart/Cart";

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
