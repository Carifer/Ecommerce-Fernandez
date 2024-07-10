import { ItemList } from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFilter = products.filter((product) => product.category === name);
      if (x) {
        resolve(name ? arrayFilter : products);
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
  }, [name]);

  return <ItemList messageError={error} items={items} />;
};

export default ItemListContainer;
