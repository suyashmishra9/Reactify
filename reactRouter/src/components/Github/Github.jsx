import React from 'react'
import { useEffect, useState ,} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/suyashmishra9').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // }, [])


    return (
        <div className='text-center text-4xl text-blue-400 bg-amber-100'>Github Followers for the following User : {data?.login} is :{data?.followers}
            <img src={data?.avatar_url} alt="" srcset="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
     const response  = await fetch('https://api.github.com/users/suyashmishra9')
     return response.json()
}