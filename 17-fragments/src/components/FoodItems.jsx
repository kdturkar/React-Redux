import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);

  const onBuyBtn = (e, data) => {
    let newItems = [...activeItems, data];
    setActiveItems(newItems);
    console.log(`Item bought ${data}`);
  }

  // It is a behaviour of 'handleBuyBtn' which is passed as a props in 'Item' component.
  // const handleBuyBtn = () => {
  //   console.log("Item bought " + items);
  // };

  return (
    <ul className="list-group">
      {items.map((item) => (
        // foodItem is kind of argument to Item component
        // onBuyBtn is an anonymous function (Isme dono event & item bind ho rahe hai)
        <Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyBtn={
          (e) => onBuyBtn(e, item)
        } ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
