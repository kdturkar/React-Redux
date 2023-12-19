import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props;

  // It is a behaviour of 'handleBuyBtn' which is passed as a props in 'Item' component.
  // const handleBuyBtn = () => {
  //   console.log("Item bought " + items);
  // };

  return (
    <ul className="list-group">
      {items.map((item) => (
        // foodItem is kind of argument to Item component
        <Item key={item} foodItem={item} handleBuyBtn={
          () => {
            console.log(`Item bought ${item}`)
          }
        } ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
