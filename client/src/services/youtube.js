import axios from 'axios'
const apiKey= process.env.REACT_APP_YOUTUBE_KEY;
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
console.log(apiKey)
const params = {
    key: apiKey
}
export const search = async() => {
    return await axios.get(`${apiUrl}?${new URLSearchParams(params)}`);
}