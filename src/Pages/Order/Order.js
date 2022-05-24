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
        const stockAvailable = tool.availableQuantity;

        const name = user?.displayName;
        const email = user.email;
        const quantity = e.target.quantity.value;
        const toolName = e.target.toolName.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const order = {
            userName: name,
            userEmail: email,
            toolName: toolName,
            orderQuantity: quantity,
            address: address,
            phone: phone
        }
        if (quantity < minimumQuantity) {
            toast.warning(`Minimum order ${minimumQuantity} /pcs`)
        }
        else if (quantity > stockAvailable) {
            toast.warning(`Stock available ${stockAvailable} /pcs.You can't purchage more then ${stockAvailable} /pcs`)
        }
        else {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            toast.success("Your Order is completed")
            e.target.reset();
        }
    }

    return (
        <form onSubmit={handlePurchasedBtn} className="hero md:min-h-full">
            <div className="hero-content flex-col lg:flex-row md:w-3/5">
                <div>
                    <img className='w-full md:w-96 mx-auto' src={tool.img} alt="" />
                    <p className='mt-2 border border-2 border-secondary p-2 rounded '>{tool.description}</p>
                </div>

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
                            <span className="label-text text-accent">Stock Available:</span>
                        </label>
                        <input type="text" value={`${tool.availableQuantity} Pcs`} className="input input-bordered" disabled name='availableQuantity' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Minimum Order Quantity: {tool.minimumOrder} /pcs</span>
                        </label>
                        <input type="number" placeholder='Quantity' className="input input-bordered" name='quantity' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Address:</span>
                        </label>
                        <input type="text" placeholder='Address' className="input input-bordered" name='address' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Phone:</span>
                        </label>
                        <input type="tel" placeholder='+880' className="input input-bordered" name='phone' />
                    </div>

                    <button type='submit' className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </form>
    );
};

export default Order;