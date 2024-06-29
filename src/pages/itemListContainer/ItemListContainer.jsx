import { ItemList } from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
        //console.log("Respuesta", res);
      })
      .catch((error) => {
        setError(error);
        //console.log("Error", error);
      });
  }, []);

  console.log(items);

  return <ItemList messageError={error} items={items} />;
};

export default ItemListContainer;
