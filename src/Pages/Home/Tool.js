import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, price, minimumOrder, availableQuantity, description } = tool;
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl glass">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center pt-3">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <small>{description}</small>
                <p className='text-lg'>Minimum Order: {minimumOrder} <span className='text-accent'>/pcs</span></p>
                <p className='text-lg'>Stock available: {availableQuantity} <span className='text-accent'>/pcs</span></p>
                <p className='text-lg'>Price: ${price} <span className='text-accent'>/pcs</span></p>
                <div className="card-actions">
                    <button className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;