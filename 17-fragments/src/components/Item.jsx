import styles from "./Item.module.css";
// We can use any name for the styles.
// Here we are catching foodItem as a props.
// Props is kind of object that holds all possible parameers.
// We can give any name to props.
const Item = ({ foodItem }) => {
  // Array destructing
  // let {foodItem} = props;
  return (
    <li className={`${styles["li-rw"]} ${styles["list-group-item"]}`}>
      <span className={styles["li-content"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
