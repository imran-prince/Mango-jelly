import React from 'react';
import { useParams } from 'react-router-dom';
import useGetData from './useGetData';

const Update = () => {
    const {id} =useParams()
    const [phones] = useGetData()
    const edit = phones.find(phone => phone._id === id)
    return (
        <div>
            edit
        </div>
    );
};

export default Update;