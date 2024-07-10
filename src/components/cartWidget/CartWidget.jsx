import { Badge } from "@mui/material";
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  //console.log(cart);

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={cart.length} color="primary" showZero={true}>
          <MdShoppingCart color="yellow" size={25} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
