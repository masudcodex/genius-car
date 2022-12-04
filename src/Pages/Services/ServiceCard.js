import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {_id, service_id, title, img, price } = service;
    return (
        <div className="card service-card w-96 bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={img} alt={title} /></figure>
            <div className="card-body service-card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <div className="card-actions justify-between items-center">
                    <h5 className="text-red-500 font-bold">Price: ${price}</h5> 
                    <Link to={`/checkout/${_id}`} className="text-red-500 font-bold"><BsArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;