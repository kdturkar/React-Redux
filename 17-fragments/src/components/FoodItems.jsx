import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props;
  const handleBuyBtn = () => {
    console.log("Item bought " + items);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        // foodItem is kind of argument to Item component
        <Item key={item} foodItem={item} handleBuyBtn={handleBuyBtn}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
