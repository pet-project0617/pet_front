import React from 'react';
import ReactPlayer from 'react-player';

function YouTubePlayer(props) {
  return (
    <ReactPlayer
      url={props.url}
      width={props.width}
      height={props.height}
      controls={props.controls}
    />
  );
}

export default YouTubePlayer;