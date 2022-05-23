import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myitems">My Items</Link></li>
                    <li><Link to="/dashboard/addreview">Add a review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;