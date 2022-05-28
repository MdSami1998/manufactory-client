import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data: member, isLoading, refetch } = useQuery('member', () =>
        fetch(`http://localhost:5000/member?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const email = member.email;

        const education = e.target.education.value;
        const city = e.target.city.value;
        const district = e.target.district.value;
        const phone = e.target.phone.value;

        const updatedProfile = { education, city, district, phone };

        fetch(`http://localhost:5000/member/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Profile Updated')
            });
        e.target.reset();
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-accent mt-5'>About Me</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10">
                    <tbody>
                        <tr>
                            <td className='text-xl font-semibold text-secondary text-center'>Name:</td>
                            <td className='text-xl font-semibold'>{user?.displayName}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-secondary text-center'>Email:</td>
                            <td className='text-lg'>{member.email}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-secondary text-center'>Education:</td>
                            <td className='text-lg'>{member.education}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-secondary text-center'>Address:</td>
                            <td className='text-lg'><span className='text-accent'>City:</span> {member.city} <span style={{ marginLeft: '5rem' }} className='text-accent'>District:</span> {member.district}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-secondary text-center'>Phone:</td>
                            <td className='text-lg'>{member.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className='text-4xl font-bold text-accent mt-5'>Update your details</h1>

            <form onSubmit={handleProfileUpdate}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6 mx-auto  rounded-lg">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Education</span>
                        </label>
                        <input type="text" placeholder='Education' className="input input-bordered" name='education' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">City</span>
                        </label>
                        <input type="text" placeholder='City' className="input input-bordered" name='city' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">District</span>
                        </label>
                        <input type="text" placeholder='District' className="input input-bordered" name='district' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Phone</span>
                        </label>
                        <input type="text" placeholder='Phone Number' className="input input-bordered" name='phone' required />
                    </div>

                    <input className='btn btn-secondary hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;