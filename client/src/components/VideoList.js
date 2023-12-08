import React from "react";
import Video from "./Video";

function VideoList({props}) {
  console.log(props)
  return (
    <div className="videos">
      {props.map((item) => {
        return (
          <Video item ={item}/>
        );
      })}
    </div>
  );
}

export default VideoList;
