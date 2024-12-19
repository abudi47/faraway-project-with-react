


  
export const PackingList = ({items , onDelete , onPacked}) => {
  return (
  <div className="list">
    <ul>
        {items.map((item) => (
            <Item key={item.id} onPacked={onPacked} onDelete={onDelete} item={item} />

        ))}
</ul>
    
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
