import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';

const Order = () => {
    const { id } = useParams();

    const [user] = useAuthState(auth);
    const [price, setPrice] = useState(0)
    const [quan, setQuan] = useState(0);
    const orderRef = useRef();

    const { data: tool, isLoading } = useQuery('tool', () =>
        fetch(`https://whispering-escarpment-42526.herokuapp.com/tools/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handlePrice = () => {
        const price = tool.price;
        const orderQuantity = orderRef.current.value;
        setQuan(orderQuantity);
        const newPrice = price * orderQuantity
        setPrice(newPrice)
    }


    const handlePurchasedBtn = (e) => {
        e.preventDefault();
        const minimumQuantity = tool.minimumOrder;
        const stockAvailable = tool.availableQuantity;

        const email = user?.email;
        const userName = user?.displayName;
        const toolName = tool.name;
        const quantity = e.target.quantity.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        // console.log(address)

        const order = { email, userName, toolName, quantity, address, phone, price };

        if (quantity < minimumQuantity) {
            return toast.warning(`Minimum order ${minimumQuantity} /pcs`)
        }
        else if (quantity > stockAvailable) {
            return toast.warning(`Stock available ${stockAvailable} /pcs.You can't purchage more then ${stockAvailable} /pcs`)
        }

        fetch('https://whispering-escarpment-42526.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order Placed!')
                }
            })
        e.target.reset();
        setPrice(0)
    }

    return (
        <form onSubmit={handlePurchasedBtn} className="hero md:min-h-full">
            <div className="hero-content flex-col lg:flex-row md:w-3/5">
                <div>
                    <img className='w-full md:w-96 mx-auto' src={tool.img} alt="" />
                    <div className='mt-2 border border-accent p-2 rounded '>
                        <p className='text-accent text-xl font-semibold mb-2'>{tool.name}</p>
                        <p className='text-justify'>{tool.description}</p>
                    </div>
                </div>

                <div className="card-body p-0 md:p-8 w-full">
                    <div className="form-control">
                        <input type="text" value={user?.displayName} disabled className="input input-bordered uppercase" name='name' />
                    </div>
                    <div className="form-control">
                        <input type="email" value={user?.email} disabled className="input input-bordered" name='email' />
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
                        <input ref={orderRef} onChange={handlePrice} type="number" placeholder='Quantity' className="input input-bordered" name='quantity' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Price: ${tool.price} /Pcs </span>
                        </label>
                        <input type="text" value={price} className="input input-bordered" required disabled />
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

                    <button disabled={(quan < tool.minimumOrder || quan > tool.availableQuantity) ? true : false} type='submit' className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </form>
    );
};

export default Order;