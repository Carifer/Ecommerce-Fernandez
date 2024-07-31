import { ItemList } from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { RiseLoader } from "react-spinners";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "Products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
      //console.log(arrayValido);
    });
  }, [name]);

  /*
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
  

  if (items.length === 0) {
    return <RiseLoader />;
  }
*/

  /*   const addProduct = () => {
    let productCollection = collection(db, "Products");
    products.forEach((element) => {
      addDoc(productCollection, element);
    });

    //console.log("Se agregaron los productos a la base");
  }; */

  return (
    <>
      {/* <Button onClick={addProduct}>Agregar productos</Button> */}
      <ItemList messageError={error} items={items} />
    </>
  );
};

export default ItemListContainer;
