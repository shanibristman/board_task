import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskContextProvide from "./context/TaskContext";
import UserContextProvider from "./context/UserContext";

import Navigation from './components/Navigation';

function App() {
  return (
    <TaskContextProvide>
      <UserContextProvider>
        <Router>
          <Switch>
              <Navigation/>
          </Switch>
        </Router>
      </UserContextProvider>
    </TaskContextProvide>
  );
}

export default App;
