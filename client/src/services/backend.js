import axios from 'axios'

export const getHome = async() => {
    return await axios.get('http://127.0.0.1:8000/',{withCredentials:true});
}