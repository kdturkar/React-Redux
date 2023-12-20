import styles from './FoodInput.module.css';

function FoodInput({ handleKeyDown }) {
  return <input type='text' className={styles.FoodInput} placeholder='Enter food name....' onKeyDown={handleKeyDown}></input>
}

export default FoodInput