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
        {loading && <div>Loading...</div>}
        {!loading && <div>{videos.map((item)=>{
            return(<div key={item.id}>
                <img alt="video" src={item.snippet.thumbnails.default.url}>
                </img>
                <p>{item.snippet.title}</p>
                </div>)
        } )}</div>}
    </div>
  )
}

export default Home