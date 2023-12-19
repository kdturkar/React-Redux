import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import './App.css'
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];
  let textToShow = "Krunal";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  }
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi repudiandae libero ratione quam nisi odit fuga doloribus nesciunt dolorem velit rem fugit voluptates sit perferendis, saepe harum. Magnam, possimus?
        </p>
      </Container> */}
    </>
  );
}
export default App;
