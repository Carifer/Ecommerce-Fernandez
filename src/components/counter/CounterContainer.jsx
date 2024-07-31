import { Counter } from "./Counter";
import { useState } from "react";
import Swal from "sweetalert2";

export const CounterContainer = ({ onAdd, stock, initial }) => {
  const [contador, setContador] = useState(initial);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      //alert("Minimo");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puede quitar más elementos",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      //alert("Máximo");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puede agregar más elementos",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};
