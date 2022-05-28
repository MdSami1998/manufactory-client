import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
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

    const makeAdmin = (email,name) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made ${name} as an admin`)
                }
            });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className='text-green-200 text-xl'>
                                <th>{index + 1}</th>
                                <td className='uppercase'>{user.name}</td>
                                <td>{user.email}</td>

                                <td className='text-accent'>{user.role === 'admin' ? 'Admin' : <button onClick={() => makeAdmin(user.email,user.name)} className='btn btn-sm text-xs bg-secondary hover:bg-transparent text-black hover:text-secondary'>Make Admin</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;