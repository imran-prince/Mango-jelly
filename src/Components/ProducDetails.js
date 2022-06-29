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
            <div className="card card-compact w-96 m-auto bg-base-100 shadow-xl my-10">
                <figure><img src={details?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand: {details?.brand}</h2>
                    <hr />
                    <h2 className="  text-center text-3xl font-bold" ><i>Details</i></h2>
                    <hr />
                    <h2 className="card-title">Name: {details?.phone_name}</h2>
                    
        
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProducDetails;