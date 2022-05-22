import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify';

const Order = () => {
    const { id } = useParams();

    const { data: tool, isLoading } = useQuery('tool', () =>
        fetch(`http://localhost:5000/tools/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeliveredBtn = () => {

        const minimumOrder = tool.minimumOrder;

        const quantity = parseInt(minimumOrder) + 20;
        console.log(quantity)
        const valueAfterDelivered = { quantity };

        const url = `http://localhost:5000/tools/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(valueAfterDelivered)
        })
            .then(res => res.json())
            .then(data => console.log("success", data));
        toast('Product Delivered!!');


    }

    return (
        <div className="hero md:min-h-full ">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-96' src={tool.img} alt="" />
                <div className='text-justify h-64 flex flex-col justify-evenly'>
                    <h1 className="text-4xl md:text-5xl font-bold">{tool.name}</h1>
                    <p className='text-lg'>Stock available: {tool.availableQuantity} <span className='text-accent'>/pcs</span></p>
                    <p className='text-lg'>Price: ${tool.price} <span className='text-accent'>/pcs</span></p>
                    <p className='text-lg flex items-center'>Minimum Order: <MinusCircleIcon className='w-10'></MinusCircleIcon> {tool.minimumOrder} <span className='text-accent'>/pcs</span><PlusCircleIcon onClick={handleDeliveredBtn} className='w-10'></PlusCircleIcon></p>

                    <button className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Order;