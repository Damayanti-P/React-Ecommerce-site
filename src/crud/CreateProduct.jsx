import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CreateProduct = () => {
    const[data,setData]=useState({
        dish_name:'',
        dish_descrip:'',
        dish_price:0,
        diet:''
    }
    );
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
            
        });
      
    };
    const HandleOnSubmit=async(e)=>
        {
            e.preventDefault()
            try{
                const response=await axios.post('http://localhost:8081/dish/save',data);
                // setData(response.data);
              
    
            }catch(error){
                console.log(error);
            }
        };
        // useEffect(()=>
        //     {
        //         HandleOnSubmit(); 
        //         // console.log(data); 
        //     },[]);
   
  return (
    <>
      <form onSubmit={HandleOnSubmit}>
        <input type="text" name='dish_name' placeholder='Dish Name' onChange={handleChange}/>
        <input type="text" name='dish_descrip' placeholder='Dish Description'onChange={handleChange}/>
        <input type="number" name='dish_price' placeholder='Dish Price'onChange={handleChange}/>
        <input type="text" name='diet' placeholder='Diet'onChange={handleChange}/>
        <button>submit</button>
      </form>
    </>
  )
}

export default CreateProduct
