import { useState } from "react";



  
export const PackingList = ({items , onDelete , onPacked, handleClear}) => {
  const [sortBy , setSortBy] = useState("input"); 

  let sortedItems;

  if (sortBy === "input")  sortedItems = items;
  if (sortBy === "desc")  sortedItems = items.slice().sort((a, b)=> a.desc.localeCompare(b.desc));
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b)=> Number(a.packed) - Number(b.packed));

  

  return (
  <div className="list">
    <ul>
        {sortedItems.map((item) => (
            <Item key={item.id} onPacked={onPacked} handleClear={handleClear} onDelete={onDelete} item={item} />

        ))}
    </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>clear List</button>
        

        
      </div>
    
  </div>
  
  )
}

function Item({ item, onDelete, onPacked }) {
  return (
    <li>
      
      <input type="checkbox" className="check" value={item.packed} onChange={() => onPacked(item.id)}></input>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>{ item.quantity}. {item.desc}  </span> 
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
