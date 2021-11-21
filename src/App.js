import './App.css';
// import {Route, Switch} from "react-router-dom"

import Header from './components/Header';
import Main from './components/Main';
import Login from "./components/Login"

import useToken from "./hooks/useToken"

function App() {

  const {token, setToken} = useToken()

  // if (!token) {
  //   return <div className="App">
  //     <Header />
  //     <Login setToken={setToken} />
  //   </div>
  // }

  return (
    <div className="App">
      <Header token={token}/>
      <Main token={token} setToken={setToken}/>
    </div>
  );
}

export default App;
