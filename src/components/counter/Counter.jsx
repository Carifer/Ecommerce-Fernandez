import { Grid, Button, Typography } from "@mui/material";

export const Counter = ({ contador, sumar, restar }) => {
  return (
    <Grid container sx={{ padding: "10px" }}>
      <Grid item>
        <Typography variant="body2">Este es el contador</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button variant="text" onClick={restar}>
          -
        </Button>
      </Grid>
      <Grid item>
        <Typography>{contador}</Typography>
      </Grid>
      <Grid item>
        <Button onClick={sumar}>+</Button>
      </Grid>
    </Grid>
  );
};
