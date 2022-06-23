import ItemList from "./ItemList";

export default function List(props) {
  console.log(props);
  const listItems = props.items.map(item => <ItemList item={item}/>)
  return (
    <ul>
      {listItems}
    </ul>
  )
}