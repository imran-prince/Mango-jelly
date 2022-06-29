import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilterProduct = ({phone}) => {
    const { phone_name, image, brand,_id } = phone
    const navigate=useNavigate()
    
    return (
        <>

            <div className="card w-96 bg-base-100 shadow-xl" >
                <figure><img src={image} alt="Phone" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand-Name: {brand}</h2>
                    <p>Name: {phone_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate(`/details/${_id}`)}>Detaisl</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterProduct;