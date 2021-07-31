import Button from "../button/Button";
import StartVideo from "../startVideo/StartVideo";
import React from "react";

const FirstFrame = (props) =>{
    return(
        <div>
            <StartVideo/>
            <Button callBack={props.callBack}/>
        </div>
    )
}

export default FirstFrame