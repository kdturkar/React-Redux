const FoodItems = () => {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];

  // if (foodItems.length > 0) {
  //   return <h3>Lenght is &gt 0</h3>
  // }

  // let exprsn = foodItems.length > 0 ? null : <h3>Ohh Shitt..</h3>

  return (
    <ul className="list-group">
      {foodItems.map((foodItem) => (
        <li key={foodItem} className="list-group-item">
          {foodItem}
        </li>
      ))}
    </ul>
  );
};
export default FoodItems;
