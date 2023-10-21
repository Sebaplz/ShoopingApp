import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ProductsProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
