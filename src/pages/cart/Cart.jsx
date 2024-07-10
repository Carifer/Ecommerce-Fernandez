import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const cart = () => {
  const { clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Contenido del carrito</h1>

      <Button onClick={clearCart}>Limpiar Carrito</Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
    </div>
  );
};

export default cart;
