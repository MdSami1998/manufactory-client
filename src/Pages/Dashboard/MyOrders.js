import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    // load order in My Order page of Dashboard
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user, orders]);


    // handle order cancel button from My Order page in Dashboard
    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        const url = `http://localhost:5000/orders/${id}`;
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = orders.filter(product => product._id !== id);
                        setOrders(remaining);
                    }
                    console.log(data)
                })
        }
    }

    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            {/* <th className='text-xl'>Name</th> */}
                            <th className='text-xl'>Tool</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className='text-green-200 text-xl'>
                                <th>{index + 1}</th>
                                {/* <td className='text-accent'>{order.userName}</td> */}
                                <td>{order.toolName}</td>
                                <td>{order.quantity} Pcs</td>
                                <td>$ {order.price}</td>
                                <td><button onClick={() => handleCancelOrder(order._id)} className='btn btn-sm text-xs bg-red-500'>Cancel</button></td>
                                <td><button className='btn btn-sm bg-secondary'>Pay</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;