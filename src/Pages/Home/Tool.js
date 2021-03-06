import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, price, minimumOrder, availableQuantity, description } = tool;

    const navigate = useNavigate();

    const handleOrderBtn = (id) => {
        navigate(`/order/${id}`)
    }
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl glass">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center pt-3">
                <h2 className="text-3xl font-semibold text-accent">{name}</h2>
                <p className='leading-6 text-justify text-white'>{description}</p>
                <p className='text-lg'>Minimum Order: {minimumOrder} <span className='text-accent'> Pcs</span></p>
                <p className='text-lg'>Stock available: {availableQuantity} <span className='text-accent'> Pcs</span></p>
                <p className='text-lg'>Price: ${price} <span className='text-accent'>/pcs</span></p>
                <div className="card-actions">
                    <button onClick={() => handleOrderBtn(_id)} className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">Purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;