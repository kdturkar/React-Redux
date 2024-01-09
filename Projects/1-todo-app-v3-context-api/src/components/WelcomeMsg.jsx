import React, { useContext } from 'react'
import styles from './WelecomeMsg.module.css'
import TodoItemsContext from '../store/todo-items-store';

function WelcomeMsg() {
  const {todoItems} = useContext(TodoItemsContext);
  return (todoItems.length === 0 && <p className={styles.message}>Hare Krishna.....</p>);
}

export default WelcomeMsg;