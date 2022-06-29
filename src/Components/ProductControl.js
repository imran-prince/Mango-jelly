import React from 'react';
import UpdateDelete from './UpdateDelete';
import useGetData from './useGetData';

const ProductControl = () => {
    const [phones] = useGetData()
    return (

        <div className="overflow-x-auto my-24">
            <table className="table w-full text-center">

                <thead>
                    <tr>
                      
                        <th>Brand</th>
                        <th>Name</th>
                     
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        phones.map((phone, index) => <UpdateDelete key={index} phone={phone}></UpdateDelete>)

                    }

                </tbody>

            </table>
        </div>

    );
};

export default ProductControl;