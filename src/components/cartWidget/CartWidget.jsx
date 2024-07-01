import { Badge } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={0} color="primary" showZero={true}>
          <MdShoppingCart color="yellow" size={25} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
