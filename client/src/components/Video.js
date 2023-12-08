import React from "react";

function Video({item,className}) {

  return (
    <div className={`video-container ${className}`} key={item.id}>
      <img
        alt="thumbnail"
        className="thumbnail"
        src={item.snippet.thumbnails.high.url}
      />
      <p>{item.snippet.title}</p>
    </div>
  );
}

export default Video;
