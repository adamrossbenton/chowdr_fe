import './App.css';
import {useState} from "react"
import {Route, Switch} from "react-router-dom"

import Header from './components/Header';
import Main from './components/Main';
import Login from "./components/Login"

function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <div className="App">
      <Header />
      <Login setToken={setToken} />
    </div>
  }

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
