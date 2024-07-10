import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import { Navbar } from "./components/navbar/Navbar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:name"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/itemDetail/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
          <Route path="*" element={<h1>404 - Pagina No disponible</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
