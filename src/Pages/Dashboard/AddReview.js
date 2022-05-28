import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [ratingError, setRatingError] = useState('');

    const ratingRef = useRef();
    const handleRatingError = () => {
        const ratingInput = ratingRef.current.value;
        let ratingErrMsg;
        if (ratingInput < 0 || ratingInput > 5) {
            ratingErrMsg = <p className='text-red-500'>
                Rating should be between 0-5
            </p>
        }
        setRatingError(ratingErrMsg);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        const rating = ratingRef.current.value;
        const review = e.target.userReview.value;
        console.log(rating, review)

        const userReview = {
            rating, review
        }

        if (rating < 0 || rating > 5) {
            return;
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added!')
                }
            })
        e.target.reset();
    }
    return (
        <div className='my-16'>
            <h1 className='text-3xl font-semibold text-secondary mb-3'>Add Your Review</h1>
            <form onSubmit={handleAddReview}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Rating</span>
                        </label>
                        <input ref={ratingRef} onChange={handleRatingError} type="number" placeholder='Rating(1-5)' className="input input-bordered" name='rating' required />
                        {ratingError}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Review</span>
                        </label>
                        <textarea className='bg-transparent border border-gray-700 rounded-xl p-3' name="userReview" placeholder='your review' cols="30" rows="4" required></textarea>
                    </div>
                    <input className='btn btn-secondary hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;