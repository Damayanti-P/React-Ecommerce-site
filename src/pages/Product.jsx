import axios from 'axios';
import Cards from '../compnents/Cards';
import { useAppContext } from '../features/AppProvider';
import { useEffect } from 'react';

const Product = () => {
    const {data,setData}=useAppContext();
    const getApi=async()=>
    {
        try{
            const response=await axios.get('https://fakestoreapi.com/products');
            setData(response.data);

        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>
    {
        getApi(); 
        // console.log(data); 
    },[]);
    
  
  return (
    <>
    <Cards sendData={data}/>
   </>
  )
}

export default Product;
