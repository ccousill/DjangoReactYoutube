import axios from 'axios'

export const getHome = async() => {
    return await axios.get('http://127.0.0.1:8000/',{withCredentials:true});
}

export const getVideos = async(numberParam) => {
    return await axios.get(`http://127.0.0.1:8000/api/get_top_youtube_videos/?number=${numberParam}`,{withCredentials:true});
}