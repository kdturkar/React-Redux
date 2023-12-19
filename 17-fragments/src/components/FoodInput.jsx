import styles from './FoodInput.module.css';

function FoodInput() {
  return <input type='text' className={styles.FoodInput} placeholder='Enter food name....' onChange={(event) => console.log(event.target.value)}></input>
}

export default FoodInput