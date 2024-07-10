import { useState } from "react";

const checkout = () => {
  const [data, setData] = useState({ nombre: "", email: "", telefono: "" });

  const checkoutOrder = (e) => {
    e.preventDefault();
    //console.log("Se envio el formulario");
    console.log(data);
  };

  const handlerChange = ({ event }) => {
    //console.log(target.name);
    //console.log(target.value);
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
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
  );
};

export default checkout;
