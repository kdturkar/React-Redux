import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import './App.css'
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];

  // let [textToShow, setTextToShow] = useState(); 

  let [foodItems, setFoodItems] = useState([]);

  // console.log("After re-paint of component value of state is " + textToShow);


  const onKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode == '13') {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`Value entered is ${newFoodItem}`);

    }
    // setTextToShow(event.target.value);
  }
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
