import './App.css';
import {useState} from "react"
import {Route, Switch} from "react-router-dom"

import Header from './components/Header';
import Main from './components/Main';
import Login from "./components/Login"

function App() {
  const setToken = userToken => {
    sessionStorage.setItem("token", JSON.stringify(userToken))
  }

  const getToken= () => {
    const tokenString = sessionStorage.getItem("token")
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  }

  const token = getToken()

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
