import React from 'react';
import { useParams } from 'react-router-dom';
import useGetData from './useGetData';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Update = () => {
    const { id } = useParams()
    const [phones] = useGetData()
    const edit = phones.find(phone => phone._id === id)



    const navigate = useNavigate()

    const handelUpdateUser = (event) => {
        event.preventDefault()
        const brand=event.target.bname.value
        const pname=event.target.pname.value
        const desc=event.target.desc.value
        const display=event.target.display.value
        const storage=event.target.storage.value
        const ram=event.target.ram.value
      const product={brand,pname,desc,display,storage,ram}
 
        fetch(`http://localhost:5000/product/${edit?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged === true) {
                    toast.success('Update successfullay')
                    navigate('/')

                }
                else {
                    toast.error('Update Failed')
                }
            })


    }
    return (
        <>
            <h2 className='text-2xl text-center'>Update Product</h2>
            <div className='grid lg:grid-cols-2  gap-10'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={edit?.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{edit?.phone_name}</h2>


                    </div>
                </div>
                <div>

                    <form onSubmit={handelUpdateUser}>
                        <div className='grid lg:grid-cols-2 gap-10 shadow-lg px-12 rounded-lg'>
                            <div>
                                <label class="label">
                                    <span class="label-text">Brand name</span>
                                </label>
                                <input type="text" placeholder="apple" name='bname' required class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>
                                <label class="label">
                                    <span class="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="iphone" name='pname' required class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea type="text" placeholder="good" name='desc' class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text">Display</span>
                                </label>
                                <input type="number" placeholder="6" name='display' class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>
                                <label class="label">
                                    <span class="label-text">Storage</span>
                                </label>
                                <input type="number" placeholder=" 64" name='storage' class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>
                                <label class="label">
                                    <span class="label-text">Ram</span>
                                </label>
                                <input type="number" placeholder="8" name='ram' class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                </label>

                            </div>
                        </div>
                         <input  type="submit" className='btn btn-primary my-5' value='Update'/>


                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Update;