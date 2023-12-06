import styles from "./Buttons.module.css";

function Buttons({ buttons }) {
  return (
    <div className={styles.btnContainer}>
      {buttons.map((item) => (
        <button key={item} type="button" className={styles.btns}>
          {item}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
