export const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h1>Este es el contador</h1>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
