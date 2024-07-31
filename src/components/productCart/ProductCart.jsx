import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";

export const ProductCart = ({
  title,
  description,
  price,
  id,
  img,
  quantity,
  onDelete,
}) => {
  return (
    <Grid container variant="elevation">
      <Grid item>
        <CardMedia
          component="img"
          height="70"
          width="100%"
          image={img}
          alt={title}
        />
      </Grid>
      <Grid item>
        <Grid item>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ paddingLeft: "10px" }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ paddingLeft: "10px" }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary" align="right">
            $ {price}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary" align="right">
            Cantidad {quantity}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
