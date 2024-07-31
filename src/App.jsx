import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Checkout from "./pages/checkout/Checkout";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => {
              return <Route key={id} path={path} element={<Element />} />;
            })}
          </Route>
          <Route path="*" element={<h1>404 - Pagina No disponible</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
