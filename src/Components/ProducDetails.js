import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetData from './useGetData';

const ProducDetails = () => {
    const { id } = useParams()
    const [phones] = useGetData()
    const details = phones.find(phone => phone._id === id)
    const navigate=useNavigate()
    return (
        <div  >
            <div class="card card-compact w-96 m-auto bg-base-100 shadow-xl my-10">
                <figure><img src={details?.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Brand: {details?.brand}</h2>
                    <hr />
                    <h2 class="  text-center text-3xl font-bold" ><i>Details</i></h2>
                    <hr />
                    <h2 class="card-title">Name: {details?.phone_name}</h2>
                    
        
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProducDetails;