import { useState } from "react";





export const Form = ({ onAddItems }) => {
  const [desc ,setDesc] = useState("");
  const [quantity ,setQuantity] = useState(1);
  
  function handleSubmit (e) {
    e.preventDefault();
    
    const newItems = {desc , quantity, packed: false , id: Date.now()}
    onAddItems(newItems);
    console.log(newItems);

    setDesc("");
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit} >
        <h3>What do you need for your 😍 trip ?</h3>      
        <select value={quantity}   onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({length: 20}, (_, i) => i + 1 ).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          )) }
         </select>
        <input value= {desc} onChange={(e) => setDesc(e.target.value)}   type="text" placeholder="Item..." />
        <button >Add</button>
    </form>
  )
}


