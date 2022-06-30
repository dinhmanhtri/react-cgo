import ShowStudentInfoComponent from "./components/StudentInfoComponent";

let studentArr = [
  {
    id: 1,
    name: "Tris",
    age: 20,
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Trs",
    age: 20,
    address: "Ha Noi",
  },
  {
    id: 3,
    name: "ris",
    age: 20,
    address: "Ha Noi",
  },
];

function App() {
  return <ShowStudentInfoComponent studentArr={studentArr} />;
}

export default App;
