import React from 'react';
import ReactDOM from 'react-dom';
import ReactHlsPlayer from 'react-hls-player';

ReactDOM.render(
  <ReactHlsPlayer
    src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />,
  document.getElementById('app')
);