import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  //let id = 2;
  const [item, setItem] = useState({});

  let initial = getQuantityById(+id);

  useEffect(() => {
    /*  let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
 */
    let productsCollection = collection(db, "Products");
    let refDoc = doc(productsCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      //console.log(res.data());
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity };
    addToCart(objetoFinal);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Se agrego el producto exitosamente",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
