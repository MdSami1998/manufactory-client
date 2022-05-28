import { UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ userReview }) => {
    const { rating, review } = userReview;
    const star = (length) => {
        let x = '';
        for (let i = 1; i <= length; i++) {
            x += '★';
        }
        return x;
    }
    return (
        <div className="card max-w-sm glass">
            <div className="card-body px-1">
                <UserCircleIcon className='w-12 mx-auto'></UserCircleIcon>
                <h2 className="text-xl font-semibold text-accent text-center">Rating: {rating}.00 <span className='text-sm text-secondary'>{star(rating)}</span></h2>
                <p className='text-xl text-white'>{review}</p>
            </div>
        </div>
    );
};

export default Review;