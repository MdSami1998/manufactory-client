import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('products', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
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

                                <td><img className='w-20' src={tool.img} alt="" /></td>

                                <td className='uppercase'>{tool.name}</td>

                                <td>$ {tool.price} /Pcs</td>

                                <td>{tool.availableQuantity} /Pcs</td>

                                <td>{tool.minimumOrder} /Pcs</td>

                                <td><button className='btn btn-sm text-xs bg-red-500'>Delete</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;