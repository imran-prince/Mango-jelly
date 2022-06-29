import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
const UpdateDelete = ({ phone }) => {
    const { brand, phone_name, _id } = phone

    const navigate = useNavigate()
    const deleteHandel = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
        })
            .then(rs => rs.json())
            .then(data => {
                console.log(data)
                 
            })
    }
     
    return (

        <>
            <tr>

                <td>{brand}</td>
                <td>{phone_name}</td>
                <td > <button onClick={() => navigate(`/update/${_id}`)}><AiOutlineEdit className='text-3xl text-blue-400'></AiOutlineEdit></button> </td>
                <td> <button onClick={() => deleteHandel(_id)}><MdDeleteForever className='text-3xl text-red-400'></MdDeleteForever></button></td>
                

            </tr>
           
        </>



    );
};

export default UpdateDelete;