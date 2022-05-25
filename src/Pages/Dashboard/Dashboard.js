import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <Outlet></Outlet>

            </div>
            <div className="drawer-side -z-0">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-lg font-semibold">
                    <li><Link to="/dashboard">My Profile</Link></li>

                    {admin ? '' : <li><Link to="/dashboard/myorders">My Orders</Link></li>}

                    {admin ? '' : <li><Link to="/dashboard/addreview">Add a review</Link></li>}

                    {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}

                    {admin && <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>}

                    {admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>}

                    {admin && <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;