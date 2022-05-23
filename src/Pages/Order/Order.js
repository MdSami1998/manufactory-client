import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';

const Order = () => {
    const { id } = useParams();

    const [user] = useAuthState(auth);

    const { data: tool, isLoading } = useQuery('tool', () =>
        fetch(`http://localhost:5000/tools/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handlePurchasedBtn = (e) => {
        e.preventDefault();
        const minimumQuantity = tool.minimumOrder;

        const name=user?.displayName;
        const email=user.email;
        const quantity = e.target.quantity.value;
        const toolName=e.target.toolName.value;
        console.log(quantity,name,email,toolName)
        if (quantity < minimumQuantity) {
            toast.warning(`Minimum order ${minimumQuantity} /pcs`)
        }
    }

    return (
        <form onSubmit={handlePurchasedBtn} className="hero md:min-h-full ">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-96' src={tool.img} alt="" />

                <div className="card-body p-0 md:p-8 w-full">
                    <div className="form-control">
                        <input type="text" value={user.displayName} disabled className="input input-bordered" name='name' />
                    </div>
                    <div className="form-control">
                        <input type="email" value={user.email} disabled className="input input-bordered" name='email' />
                    </div>
                    <div className="form-control">
                        <input type="text" value={tool.name} className="input input-bordered" disabled name='toolName' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Minimum Order Quantity: {tool.minimumOrder} /pcs</span>
                        </label>
                        <input type="number" placeholder='Quantity' className="input input-bordered" name='quantity' />

                    </div>

                    <button type='submit' className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </form>
    );
};

export default Order;