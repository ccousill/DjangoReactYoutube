import React from 'react'
import { useEffect,useState } from 'react'
import { getVideos } from '../services/backend';
function Home() {
    const [loading,setLoading] = useState(false);
    const [videos,setVideos] = useState([]);

    useEffect(() =>{
        setLoading(true);
        const fetch = async ()=>{
            try{
                const response = await getVideos();
                setVideos(response.data.videos)
            }catch(e){
                console.log(e);
            }
        }
        fetch();
        setLoading(false);
    },[])

  return (
    <div> 
        <h1 className="title">YouTube top 50</h1>
        {loading && <div>Loading...</div>}
        {!loading && <div className="videos">{videos.map((item)=>{
            return(
            <div className="video-container" key={item.id}>
                <div className="img-container">
                    <img alt="thumbnail" className="thumbnail" src={item.snippet.thumbnails.high.url}/> 
                </div>
                <p>{item.snippet.title}</p>
            </div>
            )
        } )}</div>}
    </div>
  )
}

export default Home