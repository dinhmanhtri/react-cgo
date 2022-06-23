function ItemList(props) {
  return (
    <li key={props.item.id}  >
      <input type="checkbox"></input>
      <span>{props.item.title}</span>
    </li>
  )
}

export default ItemList;