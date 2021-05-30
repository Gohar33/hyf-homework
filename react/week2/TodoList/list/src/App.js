import React from "react"
import './App.css';
import Header from './Header';
import Main from './Main';
import Count from './Count';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="Main-div">
          <Count />
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
