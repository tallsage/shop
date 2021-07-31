import './App.css';
import React, { useState, setState } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import FirstFrame from './components/firstFrame/FirstFrame'

const App = (props) => {

  const [state, setState] = useState({
    frame: false
  })

  const callBack = () =>{
    setState({...state, frame: true})
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className='frame'>
          {(!state.frame) ? (<FirstFrame callBack={callBack}/>) : (<></>)}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
