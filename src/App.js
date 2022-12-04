import './App.css';
import Table from "./components/table/table"
import { DndProvider } from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App"> 
     <Table />  
    </div>
    </DndProvider>
  );
}
export default App;
