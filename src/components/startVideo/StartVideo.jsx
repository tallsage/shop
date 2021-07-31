// import './App.css';
import React from "react";
import sample from './SampleVideo_1280x720_5mb.mp4';
import s from './StartVideo.module.css'

const StartVideo = (props) => {
  return (
    <video className={s.video} autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
  );
}

export default StartVideo;