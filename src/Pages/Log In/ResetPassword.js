import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <Loading></Loading>
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent! Set new password")
        }
        else {
            toast("Please enter your email")
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleResetPassword} className="form-control max-w-lg border border-accent p-10 rounded-lg">
                <h1 className='text-accent font-bold text-3xl mb-5'>Reset your password</h1>
                <label className="label">
                    <span className="label-text">Enter Your Email</span>
                </label>
                <input type="text" placeholder="Your Email" className="input input-bordered" name='email' />

                <input className='btn btn-accent sm:btn-sm md:btn-sm hover:bg-transparent hover:text-accent w-1/3 mx-auto mt-5 max-w-xs' type="submit" value="Reset" />
            </form>

        </div>
    );
};

export default ResetPassword;