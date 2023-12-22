import styles from './Calculator.module.css'

function Calculator({ onBtnClick }) {
  let buttons = [
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
    <div className={styles.btnContainer}>
      {buttons.map((item) => (
        <button key={item} onClick={() => onBtnClick(item)} className={styles.btns}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Calculator;
