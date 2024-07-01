import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export const Layout = () => {
  return (
    <Grid container>
      <Grid item xs={16}>
        <Navbar />
      </Grid>
      <Grid item xs={16} sx={{ paddingTop: "10px" }}>
        <Outlet />
      </Grid>
      <Grid item xs={16}>
        <Footer />
      </Grid>
    </Grid>
  );
};
