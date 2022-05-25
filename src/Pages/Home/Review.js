import React from 'react';

const Review = ({ userReview }) => {
    const { rating, review } = userReview;
    return (
        <div className="card max-w-sm  glass shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Rating:{rating}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;