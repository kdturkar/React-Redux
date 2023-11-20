import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import Item1 from "./components/item1"
import Item2 from "./components/item2"
import './App.css'

function App() {
  return <center className='todo-container'>
    <AppName />
    <AddToDo />
    <div className='items-container'>
      <Item1 />
      <Item2 />
    </div>
  </center>
}

export default App
