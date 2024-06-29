import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nabvarContainer">
        <img
          src="https://res.cloudinary.com/dxxpxlqdl/image/upload/v1719612686/logo_1_z741rr.png"
          alt=""
          style={{ width: "100px", heigth: "100px", objectFit: "cover" }}
        ></img>

        <ul style={{ display: "flex", gap: "20px" }}>
          <li>Todos</li>
          <li>Camas</li>
          <li>Escritorios</li>
          <li>Mesas</li>
          <li>Roperos</li>
        </ul>

        <CartWidget />
      </div>
      {/* <Outlet /> */}
    </>
  );
};
