import './App.css';
import List from './components/List';

const patternItems = [
  {
    id: 1,
    title: "Todo 1",
  },
  {
    id: 2,
    title: "Todo 2",
  },
  {
    id: 3,
    title: "Todo 3",
  },
  {
    id: 4,
    title: "Todo 4",
  },
];

function App() {
  // const textInput = useRef(null);
  // function handleFormSubmit(e) {
  //   e.preventDefault()
  //   console.log(textInput.current.value);
  //   const lastItem = items[items.length - 1];
  //   items.push({
  //     "id": lastItem["id"] + 1,
  //     "title": textInput.current.value
  //   });
  //   console.log(items);
  // }

  return (
    <div style={{ width: "500px", padding: "40px"}}>
      <List items={patternItems} />
    </div>
  )
}

export default App;
