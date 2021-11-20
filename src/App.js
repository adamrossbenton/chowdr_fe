import './App.css';
import {useState} from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [token, setToken] = useState()

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
