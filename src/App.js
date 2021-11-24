import './App.css';

import Header from './components/Header';
import Main from './components/Main';

import useToken from "./hooks/useToken"

function App() {

  const {token, setToken} = useToken()

  return (
    <div className="App">
      <Header token={token}/>
      <Main token={token} setToken={setToken}/>
    </div>
  );
}

export default App;
