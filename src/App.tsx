import React from 'react';
import logo from './logo.svg';
import Admin from './pages/Admin/ManageAdmin';
import './styling/App.css';


function App() {
  return (
    <div className="App">
      <Admin/>
      
    </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}