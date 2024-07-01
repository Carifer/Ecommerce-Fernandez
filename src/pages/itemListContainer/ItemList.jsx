import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ items, messageError }) => {
  //console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
