const ErrorMsg = () => {
  let foodItems = [];
//   let foodItems = ["Dal", "Green Veggies", "Roti", "Salad", "Milk"];

  return <>{foodItems.length === 0 && <h3>Err Msg Comp..</h3>}</>;
};
export default ErrorMsg;
