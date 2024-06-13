import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="nabvarContainer">
      <h2 className="logoBrand">CMF Muebles</h2>

      <ul style={{ display: "flex", gap: "20px" }}>
        <li>Todos</li>
        <li>Camas</li>
        <li>Escritorios</li>
        <li>Mesas</li>
        <li>Roperos</li>
      </ul>

      <CartWidget />
    </div>
  );
};
