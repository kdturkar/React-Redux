import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';

function Controls() {

  const dispatch = useDispatch();

  const inputValue = useRef();

  const handleIncr = () => {
    dispatch(counterActions.increament());
  }

  const handleDcr = () => {
    dispatch(counterActions.decreament());
  }

  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputValue.current.value }))
    inputValue.current.value = "";
  }

  const handleSub = () => {
    dispatch(counterActions.substract({ num: inputValue.current.value }))
    inputValue.current.value = "";
  }

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle(true))
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={handleDcr} className="btn btn-warning" >-</button>
        <button type="button" onClick={handleIncr} className="btn btn-info">+</button>
        <button className='btn btn-warning' onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" ref={inputValue} placeholder='Enter number' className='number-ip' />
        <button className='btn btn-info' onClick={handleAdd}>Add</button>
        <button className='btn btn-warning' onClick={handleSub}>Substract</button>
      </div>
    </>

  )
}

export default Controls