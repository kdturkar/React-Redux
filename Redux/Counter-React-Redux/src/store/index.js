import { createStore } from 'redux'

const INITIAL_VALUE = {
  counter: 0,
  privacy: false
}

// store in parameter is an immutable
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === 'INCR') {
    console.log(store.privacy)
    return { ...store, counter: store.counter + 1}
  } else if (action.type === 'DCR') {
    return { ...store, counter: store.counter - 1}
  } else if (action.type === 'ADD') {
    return { ...store, counter: store.counter + Number(action.payload.num)}
  } else if (action.type === 'SUB') {
    return { ...store, counter: store.counter - Number(action.payload.num)}
  } else if (action.type === 'TOGGLE') {
    return { ...store, privacy: !store.privacy }
  }
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;