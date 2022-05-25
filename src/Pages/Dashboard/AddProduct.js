import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const availableQuantity = e.target.availableQuantity.value;
        const minimumOrder = e.target.minimumOrderQuantity.value;
        const description = e.target.description.value;

        const product = { name, price, availableQuantity, img, minimumOrder, description }

        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added successfully')
            })
        e.target.reset();

    }
    return (

        <div>
            <h1 className='text-4xl font-semibold text-secondary mt-10'>Add a product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="card-body p-0 md:p-8 w-3/6 mx-auto  rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Name</span>
                        </label>
                        <input type="text" placeholder='Product name' className="input input-bordered" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Image</span>
                        </label>
                        <input type="text" placeholder='Product image URL' className="input input-bordered" name='img' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Price</span>
                        </label>
                        <input type="number" placeholder='Product price' className="input input-bordered" name='price' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Avaiable Quantity</span>
                        </label>
                        <input type="number" placeholder='Available' className="input input-bordered" name='availableQuantity' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Minimum Order Quantity</span>
                        </label>
                        <input type="number" placeholder='Minimum Order Quantity' className="input input-bordered" name='minimumOrderQuantity' required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Description</span>
                        </label>
                        <textarea className='bg-transparent border border-gray-600 rounded-xl p-3' name="description" placeholder='Short Description about product' cols="30" rows="4" required></textarea>
                    </div>

                    <input className='btn btn-secondary hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;