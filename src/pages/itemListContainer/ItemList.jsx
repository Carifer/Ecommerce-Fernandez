import { ProductCard } from "../../components/productCard/ProductCard";
import { Grid } from "@mui/material";

export const ItemList = ({ items, messageError }) => {
  //console.log(items);
  return (
    <Grid container spacing={2}>
      {items.map((item) => {
        return (
          <Grid item key={item.id}>
            <ProductCard
              title={item.title}
              description={item.description}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
