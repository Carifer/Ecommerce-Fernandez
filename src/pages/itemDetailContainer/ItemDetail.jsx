import { CounterContainer } from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <h2>{item.price}</h2>
        <h2>{item.category}</h2>
        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;
