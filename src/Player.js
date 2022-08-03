import React from "react";
import ReactDOM from "react-dom";
import "./player.css";
// import md5 from "md5";
// import ReactFlowPlayer from "react-flow-player";
import ReactHlsPlayer from "react-hls-player";


function Player({url}) {

  const refPlayer = React.useRef();
  const percentCurrent = React.useRef(0);
  const ready = React.useRef(true);

  // const file_url =
  //   "https://1500001829.vod2.myqcloud.com/d368e14cvodtransth1500001829/c60cc3a45285890814092312570/adp.10.m3u8";

  // const key = "vRBEuiSSGQRlObHaIkw2";
  // const dir = "/d368e14cvodtransth1500001829/c60cc3a45285890814092312570/";
  // const t = Math.round(new Date().getTime() / 1000 + 9999).toString(16);
  // console.log(t, "tttt");
  // const exper = 6000;
  // const rlimit = 3;
  // console.log(
  //   Math.round(new Date().getTime() / 1000 + 9999),
  //   "new Date().getTime()"
  // );
  // const us = Math.round(Math.random() * 10000000);
  // const sign = md5(key + dir + t + us);
  // const protectedKey = `t=${t}&us=${us}&sign=${sign}`;
  // console.log(`${file_url}?t=${t}&us=${us}&sign=${sign}`);

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

    // ใช้แทน onReady
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



