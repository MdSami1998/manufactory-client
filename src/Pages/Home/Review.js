import { UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ userReview }) => {
    const { rating, review } = userReview;
    return (
        <div className="card max-w-sm glass">
            <div className="card-body px-1">
                <UserCircleIcon className='w-12 mx-auto'></UserCircleIcon>
                <h2 className="text-2xl font-semibold text-accent text-center">Rating: {rating}.00</h2>
                <p className='text-xl text-white'>{review}</p>
            </div>
        </div>
    );
};

export default Review;