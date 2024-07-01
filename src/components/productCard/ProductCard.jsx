import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    /*  <div style={{ border: "2px solid purple" }}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <Link to={`/itemDetail/${id}`}>Ver mas...</Link>
    </div> */
    <Card sx={{ width: 345 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" color="primary" variant="outlined">
            Ver Mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
