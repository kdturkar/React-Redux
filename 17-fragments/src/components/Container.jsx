import styles from "./Container.module.css";
// With the help of array destructuring we can direct use Container({children}) instead of Container(props).
function Container(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Container;
