import { useState } from "react";
import Calculator from "./components/Calculator";
import styles from "./components/Calculator.module.css";
import InputField from "./components/InputField";

function App() {

  let [calcValue, setCalcValue] = useState("");

  const onBtnClick = (btnName) => {

    console.log(btnName);

    if (btnName === 'C') {
      setCalcValue("");
    } else if (btnName === '=') {
      setCalcValue(String(eval(calcValue)));
    } else if (btnName === '/') {
      setCalcValue(calcValue + '/');
    } else if (btnName === '*') {
      setCalcValue(calcValue + '*');
    } else if (btnName === '-') {
      setCalcValue(calcValue + '-');
    } else {
      setCalcValue(calcValue + btnName);
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
