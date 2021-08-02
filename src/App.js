import './App.css';
import React, { useState, setState } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import FirstFrame from './components/firstFrame/FirstFrame'
import SecondFrame from './components/secondFrame/SecondFrame';

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
          {(!state.frame) ? (
            <div className='frame1'>
              <FirstFrame callBack={callBack}/>
            </div>) : 
            (
            <div className='frame2'>
              <SecondFrame/>
            </div>)}
      </div>
    </BrowserRouter>
  );
}

export default App;
