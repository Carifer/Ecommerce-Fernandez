import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const Navbar = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: "darkviolet",
        alignContent: "center",
        display: "flex",
      }}
    >
      <Grid item xs={1} sx={{ alignContent: "center" }}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dxxpxlqdl/image/upload/v1719612686/logo_1_z741rr.png"
            alt="CMF Muebles"
            style={{ width: "50px", heigth: "50px" }}
          ></img>
        </Link>
      </Grid>
      <Grid item xs={10} sx={{ alignContent: "center" }}>
        <Grid container spacing={0.5}>
          <Grid item>
            <Link to="/">
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Todos
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/category/Camas">
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Camas
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/category/Escritorios">
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Escritorios
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/category/Mesas">
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Mesas
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/category/Roperos">
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Roperos
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sx={{ alignContent: "center" }}>
        <CartWidget />
      </Grid>
    </Grid>
  );
};
