import React from 'react';
import SinglePhone from './SinglePhone';
import useGetData from './useGetData';

const AllPhone = () => {
    const [phones]=useGetData()
    return (
        <div>
            
            <marquee behavior="" direction="left" className='text-5xl font-bold text-primary my-10'><i>All Product </i></marquee>
           <div  className='  grid lg:grid-cols-3 md:grid-cols-2 gap-10  '>
           {
                phones.reverse().map((phone,index)=><SinglePhone key={index}  phone={phone}></SinglePhone>)
                
            }
           </div>
          
        </div>
    );
};

export default AllPhone;