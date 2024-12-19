
import './index.css'
import { Form } from './components/Form'
import { Logo } from "./components/Logo"
import { Stats } from "./components/Stats"
import { PackingList } from "./components/PackingList"
import { useState } from 'react'



function App() {
  const [items, setItems] = useState([]);
  const len = items.length;
  // const percPack = item.reduce((acc, r) => len / (acc+ ))

  function handleAddItems(item){
    setItems((items) => [...items,item])
  }
  function handleDelete(id){
    console.log(id)
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleClear () {
    const conf = window.confirm("Are you want delete all items .. ?")


    if (conf) setItems([]);
    
  }
  function handlePacked(id){
    setItems((items) => (items.map(item => item.id === id ? {...item, packed:!item.packed} : item)))
    console.log(items)
    
    

  }
  return (
   <div className='app'>
    <Logo />
    <Form onAddItems = {handleAddItems}/>
    <PackingList onDelete={handleDelete} onPacked={handlePacked} handleClear={handleClear} items = {items}/>
    <Stats items={items}/>
   </div>
  )
}

export default App
