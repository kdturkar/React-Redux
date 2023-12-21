import styles from "./Item.module.css";
// We can use any name for the styles.
// Here we are catching foodItem as a props.
// Props is kind of object that holds all possible parameers.
// We can give any name to props.
const Item = ({ foodItem, bought, handleBuyBtn }) => {
  // Array destructing
  // let {foodItem} = props;

  // const handleBtn = (event) => {
  //   console.log(event.target.value);
  // }

  return (
    <li className={`${styles["li-rw"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["li-content"]}>{foodItem}</span>
      <button type="button" onClick={handleBuyBtn} className={`${styles["buy-btn"]} btn btn-info`}>Buy</button>
    </li>
  );
};

export default Item;
