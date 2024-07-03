import { CounterContainer } from "../../components/counter/CounterContainer";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  CardHeader,
} from "@mui/material";

const ItemDetail = ({ item }) => {
  return (
    <>
      {/*  <div>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <h2>{item.price}</h2>
        <h2>{item.category}</h2>
        <CounterContainer />
      </div> */}
      <Grid container>
        <Grid
          item
          xs={16}
          sx={{ alignContent: "center", padding: "50px", textAlign: "center" }}
        >
          <Card sx={{ width: 345 }}>
            <CardHeader title={item.title}></CardHeader>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  align="right"
                  sx={{ paddingTop: "10px" }}
                >
                  Precio: $ {item.price}
                </Typography>
                <Typography
                  align="right"
                  sx={{
                    fontStyle: "italic",
                    paddingTop: "10px",
                  }}
                >
                  Categoria: {item.category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CounterContainer />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;
