import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3dJFGGa1T2l3mS4u8gkaftjs8ziTZJLomiJxbPKqNhQqGIOMRojyabIzFRNs8wLlqBgH2UhLyADRkqfe2Dq8Mt00CvNUQNDd');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='glass'>
            <div className="card w-50 max-w-md shadow-2xl my-12">
                <div className="card-body">
                    <h2 className="card-title">Pay for {order.toolName}</h2>
                    <p>Your order wiil be shipped soon!</p>
                    <p>Please Pay ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;