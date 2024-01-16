import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideos } from "../services/backend";
import VideoList from "./VideoList";
function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const response = await getVideos(6);
        setHomeVideos(response.data.videos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="home-section">
      <div className="home-info">
        <h1>Find filtered videos and statistics for the day</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h3>
        <div className="home-buttons">
          <Link to="/" className="button-1">
            Travel to destination
          </Link>
          <Link to="/" className="button-2">
            Travel to destination
          </Link>
        </div>
      </div>

      <div className="home-videos">Preview Videos
      {!loading && <VideoList props={homeVideos.slice(0, 3)} />}
      {!loading && <VideoList props={homeVideos.slice(3, 6)} />}
      </div>
    </div>
  );
}

export default Home;
