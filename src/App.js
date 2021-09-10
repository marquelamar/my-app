import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List itemList = {["Get milk", "Buy Amazon", "Take over the world"]} />
        <List itemList = {["Get bread", "Get eggs"]} />
      </header>
    </div>
  );
}

export default App;
