import './App.css';
import {Route, Switch} from "react-router-dom"

import Main from "./components/Main"
import Show from "./components/Show"

function App() {
  return (
    <div className="App">
      <h1>hello chowdr</h1>
      <Switch>
        <Route path="/chowders">
          <Main/>
        </Route>
        <Route path="/chowders/:id">
          <Show/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
