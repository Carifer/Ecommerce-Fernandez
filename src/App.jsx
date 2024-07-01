import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import { Navbar } from "./components/navbar/Navbar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:name" element={<ItemListContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/itemDetail/:id"
            element={<ItemDetailContainer />}
          ></Route>
        </Route>
        <Route path="*" element={<h1>404 - Pagina No disponible</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
