import React, { useState } from 'react';
import FilterProduct from './FilterProduct';
import SinglePhone from './SinglePhone';
import useGetData from './useGetData';

const AllPhone = () => {
    const [phones] = useGetData()
     
    const [searchproduct,setSearchproduct]=useState('')
    const filterProduct=phones.filter(phone=>(phone.phone_name).toLowerCase().includes(`${searchproduct.toLowerCase()}`))
     console.log(filterProduct.length);
    const handelSearch=e=>{
        setSearchproduct(e.target.value)

    }
    return (
        <div>

            <marquee behavior="" direction="left" className='text-5xl font-bold text-primary my-10'><i>All Product </i></marquee>
            <div  >
               
                    <div className="form-control w-full m-auto my-10 max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Search</span>
                        </label>
                        <input type="text" placeholder="product name" onChange={handelSearch} className="input input-bordered w-full max-w-xs" />
                        
                         
                    </div>
            
            </div>
            {
                searchproduct?<div className='  grid lg:grid-cols-3 md:grid-cols-2 gap-10  '>
                {
                    filterProduct.map((phone, index) => <FilterProduct key={index} phone={phone}></FilterProduct>)

                }
            </div>:<div className='  grid lg:grid-cols-3 md:grid-cols-2 gap-10  '>
                {
                    phones.slice(-152).reverse().map((phone, index) => <SinglePhone key={index} phone={phone}></SinglePhone>)

                }
            </div>
            }

        </div>
    );
};

export default AllPhone;