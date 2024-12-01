import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function List(props){
  if (!props.animals){
    return <div>Loading ... </div>
  }
  if (props.animals.length == 0){
    return <div>No animals present</div>
  }
  return (
    <ul>
      {props.animals.map((animal)=>{
        return animal.startsWith("F") && <li>{animal}</li>
      })}
    </ul>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const animals = ["Dog","Lion","Tiger","Panda","Fish"]

  return (
    <>
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
      
    </>
  )
}

export default App
