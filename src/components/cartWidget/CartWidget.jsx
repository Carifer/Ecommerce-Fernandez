import { Badge } from "@mui/material";
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={total} color="primary" showZero={true}>
          <MdShoppingCart color="yellow" size={25} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
