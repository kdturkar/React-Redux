import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        // foodItem is kind of argument to Item component
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
