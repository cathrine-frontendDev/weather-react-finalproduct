import React from 'react';
import Weather from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <weather />
      <footer>
        This project was coded by Cathrine Kamasho and is {""}
        < a href='' target='_blank'>
        open sourced on Github
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
