import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                })
            toast.success('Product deleted successfully')
        }

    }
    return (
        <div>
            <h1 className='text-4xl text-green-400 font-bold my-10'>Manage Products: {products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th></th>
                            <th className='text-xl'>Product</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Available Quantity</th>
                            <th className='text-xl'>Minimum Order</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((tool, index) => <tr key={tool._id} className='text-green-200 text-xl'>
                                <th>{index + 1}</th>

                                <td><img className='w-20 rounded-full' src={tool.img} alt="" /></td>

                                <td className='uppercase'>{tool.name}</td>

                                <td>$ {tool.price} /Pcs</td>

                                <td>{tool.availableQuantity} /Pcs</td>

                                <td>{tool.minimumOrder} /Pcs</td>

                                {/* <td>
                                    <label htmlFor="my-modal" className='btn btn-sm text-xs bg-red-500 hover:text-red-500'>Cancel</label>

                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-black">✕</label>
                                            <h3 className="font-bold text-lg">Do you want to cancel the order?</h3>
                                            <div className="modal-action flex justify-center">
                                                <label onClick={() => handleDeleteProduct(tool._id)} htmlFor="my-modal" className='btn btn-md text-md bg-red-500 hover:text-red-500 text-black'>Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                </td> */}

                                <td><button onClick={() => handleDeleteProduct(tool._id)} className='btn btn-sm text-xs bg-red-500 text-black hover:bg-transparent hover:text-red-500'>Delete</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;