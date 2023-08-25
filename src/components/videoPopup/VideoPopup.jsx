import React from 'react'
import ReactPlayer from 'react-player'

import './style.scss'

const VideoPopup = ({show,setShow,videoId,setVideoId}) => {
    const hidePopup  = ()=>{
         setShow(false);
         setVideoId(null);
    }
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
        <div className="opacity-layer" onClick={hidePopup}></div>
        <div className="videoPlayer">
            <div className="closeBtn" onClick={hidePopup}>
                 close
            </div>
            <ReactPlayer
                 url={`https://www.youtube.com/watch?v=${videoId}`}
                 controls
                 width="100%"
                 height="100%"
            /> 
        </div>
    </div>
  )
}

export default VideoPopup