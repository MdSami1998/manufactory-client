import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionID, setTransectionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, userName, email } = order;

    useEffect(() => {
        fetch("https://whispering-escarpment-42526.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransectionID(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Congrates!Your payment is completed');


            const payment = {
                order: _id,
                transectionID: paymentIntent.id
            }
            fetch(`https://whispering-escarpment-42526.herokuapp.com/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}

            {success && <div className='text-accent'>
                <p>{success}</p>
                <p>Transection ID: <span className='text-secondary font-semibold'>{transectionID}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;