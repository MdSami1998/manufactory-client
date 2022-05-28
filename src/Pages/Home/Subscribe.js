import React from 'react';
import subscribeImg from '../../assets/icons/subscribe.png'

const Subscribe = () => {
    return (
        <div className='block md:flex items-center justify-evenly mx-0 md:mx-10 my-5 md:my-10 p-5 md:p-10 bg-green-50'>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>Give your suggestion to add more products!!</h1>
                <h4 className='text-center text-3xl text-accent font-semibold my-10'>Subscribe Now!</h4>

                <input className='w-1/2 md:w-2/4 bg-green-200 placeholder-gray-400 text-black outline-none font-semibold px-5 py-3 rounded-l-xl' type="email" placeholder='Enter Your Email' required />

                <button type='submit' className='bg-green-900 border border-accent hover:bg-transparent hover:text-accent font-semibold px-5 py-3 rounded-r-xl '>Subscribe</button>
            </div>
            <div>
                <img className='w-32 mx-auto pt-10 md:w-72' src={subscribeImg} alt="" />
            </div>
        </div>
    );
};

export default Subscribe;