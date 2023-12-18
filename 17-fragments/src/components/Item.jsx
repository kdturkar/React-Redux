import styles from "./Item.module.css";
// We can use any name for the styles.
// Here we are catching foodItem as a props.
// Props is kind of object that holds all possible parameers.
// We can give any name to props.
const Item = ({ foodItem }) => {
  // Array destructing
  // let {foodItem} = props;

  const handleBuyBtn = (para) => {
    console.log("Item bought " + para);
  }

  return (
    <li className={`${styles["li-rw"]} ${styles["list-group-item"]}`}>
      <span className={styles["li-content"]}>{foodItem}</span>
      <button type="button" onClick={() => handleBuyBtn(foodItem)} className={`${styles["buy-btn"]} btn btn-info`}>Buy</button>
    </li>
  );
};

export default Item;
