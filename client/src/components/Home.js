import React from 'react'
import { useEffect,useState } from 'react'
import { getHome } from '../services/backend';
import { search } from '../services/youtube';
function Home() {
    const [data,setData] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        const fetch = async ()=>{
            try{
                const response = await getHome();
                const response2 = await search();
                console.log(response2.data.items)
                console.log(response.data);
                setData(response.data)
            }catch(e){
                console.log(e);
            }
        }
        fetch();
        setLoading(false);
    },[data])

  return (
    <div> 
        {loading && <div>Loading...</div>}
        {!loading && <div>{data}</div>}
    </div>
  )
}

export default Home