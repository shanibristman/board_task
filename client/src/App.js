import { BrowserRouter as Router} from 'react-router-dom';
import Tasks from './components/Tasks';
import TaskContextProvide from "./context/TaskContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <TaskContextProvide>
      <UserContextProvider>
        <Router>
          <Tasks/>
        </Router>
      </UserContextProvider>
    </TaskContextProvide>
  );
}

export default App;
