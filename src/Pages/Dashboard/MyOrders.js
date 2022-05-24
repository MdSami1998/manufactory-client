import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     const email = user.email;
    //     const url = `http://localhost:5000/orders?email=${email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [user])
    
    const email = user.email;
    const { data: orders, isLoading } = useQuery('tools', () =>
        fetch(`http://localhost:5000/orders?email=${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>My Items{orders.length}</h1>
        </div>
    );
};

export default MyOrders;