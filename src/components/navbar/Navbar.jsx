import CartWidget from "../cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nabvarContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dxxpxlqdl/image/upload/v1719612686/logo_1_z741rr.png"
            alt=""
            style={{ width: "100px", heigth: "100px", objectFit: "cover" }}
          ></img>
        </Link>
        <ul style={{ display: "flex", gap: "20px" }}>
          <Link to="/" className="linkMenu">
            Todos
          </Link>
          <Link to="/category/Camas" className="linkMenu">
            Camas
          </Link>
          <Link to="/category/Escritorios" className="linkMenu">
            Escritorios
          </Link>
          <Link to="/category/Mesas" className="linkMenu">
            Mesas
          </Link>
          <Link to="/category/Roperos" className="linkMenu">
            Roperos
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
