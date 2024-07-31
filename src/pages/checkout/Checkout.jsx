import { Button, Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearToCart } = useContext(CartContext);
  let total = getTotalPrice();
  const [orderId, setOrderId] = useState("");
  /* const [data, setData] = useState({ nombre: "", email: "", telefono: "" });

  const checkoutOrder = (e) => {
    e.preventDefault();
    //console.log("Se envio el formulario");
    console.log(data);
  };

  const handlerChange = ({ event }) => {
    //console.log(target.name);
    //console.log(target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  }; */

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", mail: "", celular: "" },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
      };
      let productsCollection = collection(db, "Products");
      let ordersCollection = collection(db, "Orders");
      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderId(res.id);
          cart.forEach((element) => {
            let refDoc = doc(productsCollection, element.id);
            //console.log(refDoc);
            updateDoc(refDoc, { stock: element.stock - element.quantity });
          });
          Swal.fire({
            position: "top",
            icon: "success",
            title: `Gracias por tu compra , tu ticket es ${res.id} `,
            showConfirmButton: true,
            timer: 2000,
          });
        })
        .catch()
        .finally(() => {
          clearToCart();
          navigate("/");
        });
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo Obligatorio"),
      mail: Yup.string()
        .email("Formato de mail incorrecto")
        .required("Campo Obligatorio"),
      celular: Yup.number().required("Campo Obligatorio"),
    }),

    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <div>
          <h2>El pedido {orderId} se registro correctamente</h2>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "20px",
          }}
        >
          <TextField
            name="nombre"
            variant="outlined"
            type="text"
            label="nombre"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          ></TextField>
          <TextField
            name="mail"
            variant="outlined"
            type="text"
            label="mail"
            onChange={handleChange}
            error={errors.mail ? true : false}
            helperText={errors.mail}
          ></TextField>
          <TextField
            name="celular"
            variant="outlined"
            type="text"
            label="celular"
            onChange={handleChange}
            error={errors.celular ? true : false}
            helperText={errors.celular}
          ></TextField>
          <div>
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
  /* return (
    <div>
      <h1>Acá va el formulario</h1>
      <form onSubmit={checkoutOrder}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handlerChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu email"
          onChange={handlerChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          onChange={handlerChange}
          name="telefono"
        />
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  ); */
};

export default Checkout;
