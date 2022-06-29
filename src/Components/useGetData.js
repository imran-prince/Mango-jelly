import React, { useEffect, useState } from 'react';

const useGetData = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(rs=>rs.json())
        .then(data=>setPhones(data))
    },[])
    return [phones]
         
   
}
export default useGetData;