import { useState } from "react";
import Calculator from "./components/Calculator";
import styles from "./components/Calculator.module.css";
import InputField from "./components/InputField";

function App() {

  let [calcValue, setCalcValue] = useState("");

  const onBtnClick = (btnName) => {

    console.log(btnName);

    if (btnName === 'C') {
      setCalcValue = "";
    }
    else if (btnName === '=') {

    }
    else if (btnName === '/') {
      setCalcValue = calcValue / btnName;
    }
    else if (btnName === '*') {
      setCalcValue = calcValue * btnName;
    }
    else if (btnName === '-') {
      setCalcValue = calcValue - btnName;
    }
    else {
      setCalcValue = calcValue + btnName;
    }
  };

  return (
    <div className={styles.calculator}>
      <InputField calcValue={calcValue}></InputField>
      <Calculator onBtnClick={onBtnClick}></Calculator>
    </div>
  );
}
export default App;
