import React from 'react';

const Review = ({ userReview }) => {
    const { rating, review } = userReview;
    return (
        <div className="card max-w-sm bg-gray-600 hover:glass  shadow-xl ">
            <div className="card-body px-1">
                <h2 className="text-2xl font-semibold text-accent text-center">Rating:{rating}</h2>
                <p className='text-xl text-white'>{review}</p>
            </div>
        </div>
    );
};

export default Review;