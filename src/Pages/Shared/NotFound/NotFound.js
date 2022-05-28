import {  ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundIcon from '../../../assets/icons/404.png'

const NotFound = () => {
    return (
        <div className='flex w-3/6 mx-auto items-center min-h-screen'>
            <div>
                <img className='w-96' src={notFoundIcon} alt="" />
            </div>
            <div className='text-justify ml-20'>
                <h1 className='text-red-500 text-6xl font-semibold'>404!</h1>
                <h1 className='text-accent text-4xl font-semibold'>Opps,</h1>
                <p className='text-red-500 text-2xl'>Page not found...</p>
                <Link to="/" className='mt-7 btn btn-sm btn-accent bg-transparent text-accent hover:bg-accent hover:text-black'>Go to homepage<ArrowNarrowRightIcon className='w-7'></ArrowNarrowRightIcon></Link>
            </div>
        </div>
    );
};

export default NotFound;