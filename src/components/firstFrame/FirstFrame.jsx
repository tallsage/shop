import Button from "../button/Button";
import StartVideo from "../startVideo/StartVideo";
import React, { useEffect, useState, setState } from "react";

const FirstFrame = (props) =>{

    const [state, setState] = useState({
        second: false
      })

    useEffect(() => {
        const timer = setTimeout(() => {
            setState({...state, second: true})
          }, 5000);
          return () => clearTimeout(timer);
    }, [])

    return(
        <div>
            <StartVideo/>
            {(state.second) ? (<Button callBack={props.callBack}/>) : (<></>)}
        </div>
    )
}

export default FirstFrame