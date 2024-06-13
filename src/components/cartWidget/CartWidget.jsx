import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div>
      <div style={{ fontWeight: "bold", marginLeft: "10px" }}>1</div>
      <MdShoppingCart color="yellow" size={25} />
    </div>
  );
};

export default CartWidget;
