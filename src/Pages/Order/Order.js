import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { PlusCircleIcon,MinusCircleIcon } from '@heroicons/react/solid'

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
    return (
        <div class="hero md:min-h-full ">
            <div class="hero-content flex-col lg:flex-row">
                <img className='w-96' src={tool.img} alt="" />
                <div className='text-justify h-64 flex flex-col justify-evenly'>
                    <h1 class="text-5xl font-bold">{tool.name}</h1>
                    <p className='text-lg'>Stock available: {tool.availableQuantity} <span className='text-accent'>/pcs</span></p>
                    <p className='text-lg'>Price: ${tool.price} <span className='text-accent'>/pcs</span></p>
                    <p className='text-lg flex justify-center items-center'>Minimum Order: <MinusCircleIcon className='w-10'></MinusCircleIcon> {tool.minimumOrder} <span className='text-accent'>/pcs</span><PlusCircleIcon className='w-10'></PlusCircleIcon></p>

                    <button class="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Order;