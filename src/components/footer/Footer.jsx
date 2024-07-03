import { Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "darkviolet",
        alignContent: "center",
        bottom: 0,
        position: "fixed",
      }}
    >
      <Grid item>
        <Typography variant="body1" color="yellow" textAlign="center">
          2024 - E-commerce: Carina Fernandez
        </Typography>
      </Grid>
    </Grid>
  );
};
