import React from 'react';
 
 


import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const ProdcutAdd = () => {
  
 
   



    const navigate = useNavigate()

    const handelProduct = (event) => {
        event.preventDefault()
        const brand = event.target.bname.value
        const phone_name = event.target.pname.value
        const description = event.target.desc.value
        const display = event.target.display.value
        const storage = event.target.storage.value
        const ram = event.target.ram.value
        const image = event.target.image.value
        const product = { brand, phone_name, description, display, storage, ram ,image}

        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged === true) {
                    toast.success('Add successfullay')
                    navigate('/')

                }
                else {
                    toast.error('  Failed')
                }
            })


    }
    return (
        <>
             
                      <h1 className='text-center my-5 text-4xl font-bold'>New Product Insert</h1>
                    <form onSubmit={handelProduct}>
                        <div className='grid lg:grid-cols-2 gap-10 shadow-lg px-12 rounded-lg'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Brand name</span>
                                </label>
                                <input type="text" placeholder="apple" name='bname' required className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="iphone" name='pname' required className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" placeholder="good" name='desc' className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Display</span>
                                </label>
                                <input type="number" placeholder="6" name='display' className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                                <label className="label">
                                    <span className="label-text">Storage</span>
                                </label>
                                <input type="number" placeholder=" 64" name='storage' className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                                <label className="label">
                                    <span className="label-text">Ram</span>
                                </label>
                                <input type="number" placeholder="8" name='ram' className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>
                                <label className="label">
                                </label>
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder=' https://images.ctfassets.net/hrltx12pl8hq/5Iq664jCcrgs8BDsnpqoqg/8626987010e480955298017173d4c02d/01-flowers_797194879.jpg?fit=fill&w=480&h=270 image link'   name='image' className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                </label>

                            </div>
                        </div>
                       <div className='text-center'>
                       <input type="submit" className='btn btn-primary my-5 ' value='Insert' />

                       </div>

                    </form>
                
            
            <ToastContainer></ToastContainer>
        </>
    );
};

export default ProdcutAdd;