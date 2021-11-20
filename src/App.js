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
      <Login />
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
