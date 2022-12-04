import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
            
        };

        //Use Field Validation

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify(order),
        })
        .then(response=> response.json())
        .then(data=>{
            if (data.acknowledged) {
                alert('order placed successfully!')
                form.reset();
            }
        })
        .catch(error=> console.error(error))
    }

    return (
        <div className='w-full md:w-4/6 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-2xl font-semibold mb-4'>You are about to order: {title}</h2>
                <h5 className='text-xl font-semibold mb-5'>Price: {price}</h5>
                <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
                    <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full mb-5" required/>
                    <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full mb-5" required/>
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly/>
                </div>
                <div>
                    <textarea name='message' className="textarea w-full input-bordered mb-5" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" className='btn btn-error w-full text-white' value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;