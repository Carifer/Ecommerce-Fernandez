import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductCart } from "../../components/productCart/ProductCart";
import { BorderAll, Padding } from "@mui/icons-material";
import Swal from "sweetalert2";

const cart = () => {
  const { cart, clearToCart, deleteProduct, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  let total = getTotalPrice();
  let totalItems = getTotalItems();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Quiere quitar del carrito este producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Se quito el producto!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se quitó el producto", "", "info");
      }
    });

    //
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ padding: "20px" }}>
          Contenido del carrito: {totalItems} Productos
        </Typography>
      </Grid>
      <Grid item sx={{ paddingTop: "10px" }} xs={12}>
        <Grid container>
          {cart.map((product) => {
            return (
              <Grid item key={product.id} style={{ padding: "10px" }}>
                <ProductCart
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                  id={product.id}
                  quantity={product.quantity}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <Button onClick={() => handleDelete(product.id)}>
                    Quitar
                  </Button>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {totalItems > 0 && (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography style={{ padding: "10px" }}>
                Total a pagar $ {total}
              </Typography>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={clearToCart}>Limpiar Carrito</Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar Compra</Button>
              </Link>
            </div>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default cart;
