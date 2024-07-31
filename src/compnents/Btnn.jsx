import React from 'react'
import { Link } from 'react-router-dom'

const Btnn = (data) => {
    const{name,surname,pass,link}=data.data
    console.log(data);
  return (
    <Link to={link.length!==0?'/'+link:'/nolink'}>
        <button>
            <div>{name}</div>
        </button>
    </Link>
  )
}

export default Btnn
