import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];
  return (      
    <Container>  
      <h1>Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}
export default App;
