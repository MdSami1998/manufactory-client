import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user]);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Tool</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) => <tr className='text-green-200'>
                                <th>{index+1}</th>
                                <td>{order.userName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity} Pcs</td>
                                <td>${order.quantity} Pcs</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;