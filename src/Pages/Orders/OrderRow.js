import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, customer, phone, price, service, status} = order;
    const [orderService, setOrderService] = useState([])

    useEffect(()=>{
        fetch(`https://genius-car-server-gold.vercel.app/services/${service}`)
        .then(res=> res.json())
        .then(data=>setOrderService(data))
    },[service])

    

    return (
        <tr>
            <th>
                <Link onClick={()=>handleDelete(_id)} className='btn btn-square btn-outline'>X</Link>
            </th>
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="rounded w-16 h-16">
                    {
                        orderService?.img &&
                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                    }
                </div>
                </div>
                <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">${price}</div>
                </div>
            </div>
            </td>
            <td>
            {customer}
            <br/>
            <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>Purple</td>
            <th>
            <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'PENDING'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;