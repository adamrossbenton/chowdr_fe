import './App.css';
import {Route, Switch} from "react-router-dom"

import Main from "./components/Main"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <h1>hello chowdr</h1>
      <Switch>
        <Route path="/chowders">
          <Main/>
        </Route>
        <Route path="/header">
          <Header/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
