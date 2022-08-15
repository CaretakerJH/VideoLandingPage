import React from "react";
import ReactDOM from "react-dom";
import "../player.css";
// import md5 from "md5";
// import ReactFlowPlayer from "react-flow-player";
import ReactHlsPlayer from "react-hls-player";


function Player({url}) {
  console.log(url);

  const refPlayer = React.useRef();
  const percentCurrent = React.useRef(0);
  const ready = React.useRef(true);

  React.useEffect(() => {
    // console.log(refPlayer.currentTime());
    if (refPlayer && refPlayer.current) {
      refPlayer.current.addEventListener("canplay", canplay);
      refPlayer.current.addEventListener("timeupdate", timeupdate);
      refPlayer.current.addEventListener("ended", fireOnVideoEnd);
    }
  }, []);

  function canplay() {
    if (ready.current) {
      console.log("canplay");
      ready.current = false;
    }

    //
  }
  function timeupdate(e) {
    const duration = refPlayer.current.duration;
    const currentTime = refPlayer.current.currentTime;

    var handlePercent = Math.ceil((currentTime / duration) * 100);

    if (percentCurrent.current < 75 && handlePercent === 75) {
      console.log("75 percentCurrent");
      percentCurrent.current = handlePercent;
    } else if (percentCurrent.current < 95 && handlePercent === 95) {
      console.log("95 percentCurrent");
      percentCurrent.current = handlePercent;
    } else if (percentCurrent.current < 100 && handlePercent === 100) {
      console.log("100 percentCurrent");
      percentCurrent.current = handlePercent;
    }
    console.log(percentCurrent.current);

    // Do some stuff when the video ends
  }
  function fireOnVideoEnd(e) {
    console.log("tan2");

    // Do some stuff when the video ends
  }
  

  return (
    <div className="Player">
      <ReactHlsPlayer
        
        playerRef={refPlayer}
        src={url}
        controls={true}
        width="100%"
        height="auto"
        autoPlay={true}
        
      />
    </div>
  );
}

export default Player;



