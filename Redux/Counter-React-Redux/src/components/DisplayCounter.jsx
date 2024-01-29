import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
  // useSelector store me se ek slice nikalenga and subscrption is made for that slice, subscription manage karna useSelector ka kaam hai
  const currentSate = useSelector(store => store.counter);
  return (
    <p className="lead mb-4">Counter current value: {currentSate}</p>
  )
}

export default DisplayCounter