import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import echo from "./helpers/websocket";

function App() {


  useEffect(() => {
    echo.channel('start-1').listen('.start', async () => {
      console.log("big shit");
    })
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
