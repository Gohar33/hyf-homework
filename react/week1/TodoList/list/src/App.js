import React from "react"
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="Main-div">
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
