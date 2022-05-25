import React from 'react';

const Review = ({ userReview }) => {
    const { rating, review } = userReview;
    return (
        <div class="card max-w-sm  glass shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Rating:{rating}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;