import './App.css';
import {useState} from "react"
import {Route, Switch} from "react-router-dom"

import Main from "./components/Main"
import Header from "./components/Header"

function App() {
  const [token, setToken] = useState()

  return (
    <div className="App">
      <h1>hello chowdr</h1>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/">
          <Header/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
