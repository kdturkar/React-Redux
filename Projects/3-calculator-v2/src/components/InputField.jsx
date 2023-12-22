import styles from './InputField.module.css';

function InputField({calcValue}) {
  return <input type="text" value={calcValue} readOnly className={styles.display} />
}

export default InputField