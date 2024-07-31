import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetProduct = () => {
    const {data,setData}=useState({});
    const getApi=async()=>
    {
        try{
            const response=await axios.get('http://localhost:8081/dish/alldishes');
            setData(response.data);

        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>
    {
        getApi(); 
        console.log(data); 
    },[]);
  return (
    <div>
        {/* {data.map((e)=>(
            <ul>
            <li>
                hi
            </li>
          </ul>
        ))}
       */}
    </div>
  )
}

export default GetProduct
