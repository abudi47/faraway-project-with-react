
export const Stats = ({items}) => {
  const len = items.length;
  const perc = items.filter((items) => items.packed).length
  let x = (perc / len) * 100;
  
  return (
    <footer className="stats">
        <em>💼 you have {len} items on your list , and you already packed 1 ({x})% </em>

    </footer>
  )
}
