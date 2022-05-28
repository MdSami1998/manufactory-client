import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-10 mt-20'>
            <h1 className='text-accent text-3xl md:text-4xl font-semibold'>Customer's Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20 my-10 px-2 md:px-20'>
                {
                    reviews.map(review => <Review key={review._id} userReview={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;