import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(()=>{
        fetch(`https://genius-car-server-gold.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
        .then(res=>{
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data=>{
            setOrders(data);
        })
    },[user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm("Do you want to cancel this order?");
        if (proceed) {
            fetch(`https://genius-car-server-gold.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('geniusToken')}`
                }
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    alert("Order successfully deleted!");
                    const remaining = orders.filter(ordr=> ordr._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = (id) => {
        fetch(`https://genius-car-server-gold.vercel.app/orders/${id}`,{
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount > 0) {
                const remaining = orders.filter(ordr=> ordr._id !== id)
                const approving = orders.find(ordr=> ordr._id === id)
                approving.status = 'Approved';

                const newOrders = [approving, ...remaining];
                setOrders(newOrders)
            }
        })
    }

    return (
        <div className='width mx-auto'>
            <h2 className='text-3xl'>You have {orders.length} order</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Service</th>
                        <th>User</th>
                        <th>Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from(orders).map(order=>
                            <OrderRow 
                                key={order._id} 
                                order={order} 
                                handleDelete={handleDelete} 
                                handleStatusUpdate = {handleStatusUpdate}
                                >
                            </OrderRow>)
                        }
                    </tbody> 
                </table>
            </div>
        </div>
    );
};

export default Orders;