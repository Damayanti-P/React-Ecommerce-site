import React, { createContext, useContext, useState } from 'react'

const appContext=createContext();
const useAppContext=()=>
{
  return useContext(appContext)
} 

const AppProvider = ({children}) => {
  const [data,setData]=useState([]);
  const [count,setCount] =useState(0);
  return (

    <>
      <appContext.Provider value={{count,setCount,data,setData}}>
        {children}
      </appContext.Provider>
    </>
  );
};

export {AppProvider,useAppContext}
