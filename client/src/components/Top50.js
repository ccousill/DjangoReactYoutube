import React from "react";
import { useEffect, useState } from "react";
import { getVideos } from "../services/backend";
import Video from "./Video";
import VideoList from "./VideoList";
function Top50() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const response = await getVideos();
        setVideos(response.data.videos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetch();
  }, []);
  return (
    <div>
      <h1 className="title">YouTube top 50</h1>
      {loading && <p>Loading...</p>}
      {!loading && <Video item={videos[0]} className="number-1" />}
      <div className="runner-ups">
        {!loading && <Video item={videos[1]} className="runner-up"/>}
        {!loading && <Video item={videos[2]} className="runner-up"/>}
      </div>
      {!loading && <VideoList props={videos.slice(3, videos.length)} />}
    </div>
  );
}
export default Top50;
