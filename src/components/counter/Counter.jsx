export const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h3>Este es el contador</h3>
      <button onClick={restar}>-</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>+</button>
    </div>
  );
};
