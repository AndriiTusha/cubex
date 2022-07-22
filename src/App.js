import ListItem from "./Components/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { ADD_VALUE, addValueCreator } from "./reducer/listReducer";

function App() {
  return (
    <div>
      <h1>Test task</h1>
      <ListItem />
    </div>
  );
}

export default App;
