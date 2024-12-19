


  
export const PackingList = ({items}) => {
  return (
  <div className="list">
    <ul>
        {items.map((item) => (
            <Item key={item.quantity} item={item} />

        ))}
</ul>
    
  </div>
  
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>{ item.id}. {item.desc}  </span> 
      <button>❌</button>
    </li>
  );
}
