import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
     <ErrorMsg></ErrorMsg>
      <FoodItems></FoodItems>
    </>
  );
}
export default App;
