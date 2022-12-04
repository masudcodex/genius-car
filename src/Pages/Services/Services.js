import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();
    useEffect(()=>{
        fetch(`https://genius-car-server-gold.vercel.app/services?search=${search}&order=${ isAsc ? 'asc' : 'desc'}`)
        .then(res=>res.json())
        .then(data=> setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <div className='mx-auto text-center w-1/2 mb-12'>
                <h5 className='text-xl font-bold text-red-500 mb-3'>Services</h5>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <input type="text" ref={searchRef} className='input input-sm'/><button onClick={handleSearch} className='btn'>Search</button>
                <button onClick={()=>setIsAsc(!isAsc)} className='btn'>{isAsc ? 'desc': 'asc'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;