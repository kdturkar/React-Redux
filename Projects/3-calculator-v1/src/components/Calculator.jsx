import styles from "./Calculator.module.css";
import InputField from "./InputField";
import Buttons from "./Buttons";

function Calculator({keys}) {
  return (
    <div className={styles.calculator}>
      <InputField></InputField>
      <Buttons buttons={keys}></Buttons>
    </div>
  );
}

export default Calculator;
