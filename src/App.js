import React from "react";
import Weather from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Johannesburg"/>
      <footer>
        This project was coded by Cathrine Kamasho and is {""}
        < a href='https://github.com/cathrine-frontendDev/weather-react-finalproduct' rel="noreferrer" target='_blank'>
        open sourced on Github {""}
        </a>
        and is {""}
        <a href="">
        hosted on Netlify.
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
