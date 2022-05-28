import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // load order in My Order page of Dashboard
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-escarpment-42526.herokuapp.com/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data));
    }, [user, orders, navigate]);


    // handle order cancel button from My Order page in Dashboard
    const handleCancelOrder = (id) => {
        const url = `https://whispering-escarpment-42526.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = orders.filter(product => product._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold'>Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-xl'>Tool</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Delete</th>
                            <th className='text-xl'>Payment</th>
                            <th className='text-xl'>Transaction Id</th>
                            <th className='text-xl'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className='text-green-200 text-xl'>
                                <th>{index + 1}</th>

                                <td>{order.toolName}</td>

                                <td>{order.quantity} Pcs</td>

                                <td>$ {order.price}</td>

                                <td>
                                    {!order.paid && <label htmlFor="my-modal" className='btn btn-sm text-xs bg-red-500 hover:text-red-500'>Cancel</label>}

                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-black">✕</label>
                                            <h3 className="font-bold text-lg">Do you want to cancel the order?</h3>
                                            <div className="modal-action flex justify-center">
                                                <label onClick={() => handleCancelOrder(order._id)} htmlFor="my-modal" className='btn btn-md text-md bg-red-500 hover:text-red-500 text-black'>Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {!order.paid ? <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm bg-secondary'>Pay</button></Link> : <span className='text-accent'>Paid</span>}
                                </td>

                                <td>
                                    {order.transectionID && <small className='text-accent'>{order.transectionID}</small>}
                                </td>

                                <td>
                                    {order.status
                                        ?
                                        <p className='text-accent'>Shipped</p>
                                        :
                                        <p className='text-secondary'>{!order.paid ? "" : "Shipping"}</p>}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyOrders;