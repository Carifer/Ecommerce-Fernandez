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
    <Card sx={{ width: 345 }} variant="elevation">
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
          <Typography variant="body2" color="text.secondary" align="right">
            $ {price}
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
