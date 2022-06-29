import React from 'react';
import { useNavigate } from "react-router-dom";
const SinglePhone = ({ phone }) => {
    const { phone_name, image, brand,_id } = phone
    const navigate=useNavigate()
    
    
    return (
        <>
            
            <div class="card w-96 bg-base-100 shadow-xl" >
                <figure><img src={image} alt="Phone" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Brand-Name: {brand}</h2>
                    <p>Name: {phone_name}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" onClick={()=>navigate(`/details/${_id}`)}>Detaisl</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePhone;