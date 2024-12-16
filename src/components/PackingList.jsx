import PropTypes from 'prop-types';

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 5, packed: true },
    { id: 4, description: "pc", quantity: 56, packed: true },
  ];

  
export const PackingList = () => {
  return (
  <div className="list">
    <ul>
        {initialItems.map((item) => (
            <Item key={item.id} item={item} />

        ))}
</ul>
    
  </div>
  
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.id}. {item.description}  </span> 
      <button>❌</button>
    </li>
  );
}

Item.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    }).isRequired,
  };