import Calculator from "./components/Calculator";

function App() {
  let keys = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  return (
    <Calculator keys={keys}></Calculator>
  );
}
export default App;
