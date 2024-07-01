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
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" align="right">
                  $ {item.price}
                </Typography>
                <Typography
                  align="right"
                  sx={{
                    fontStyle: "italic",
                    paddingTop: "10px",
                  }}
                >
                  {item.category}
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
