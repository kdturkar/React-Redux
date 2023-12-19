import styles from './FoodInput.module.css';

function FoodInput({ handleOnChange }) {
  return <input type='text' className={styles.FoodInput} placeholder='Enter food name....' onChange={handleOnChange}></input>
}

export default FoodInput