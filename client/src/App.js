import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskContextProvide from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvide>
      <Router>
        <Tasks></Tasks>
      </Router>
    </TaskContextProvide>
  );
}

export default App;
