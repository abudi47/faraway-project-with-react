
import './index.css'
import { Form } from './components/Form'
import { Logo } from "./components/Logo"
import { Stats } from "./components/Stats"
import { PackingList } from "./components/PackingList"
import { useState } from 'react'



function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items,item])
  }

  return (
   <div className='app'>
    <Logo />
    <Form onAddItems = {handleAddItems}/>
    <PackingList items = {items}/>
    <Stats />
   </div>
  )
}

export default App
