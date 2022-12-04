import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className="w-full rounded-xl" alt=''/>
            </div>
            <div className="absolute transform -translate-y-1/2 left-24 top-1/2 text-white">
                <h1 className='text-6xl font-bold'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing <br />
                </h1>
                <p className='my-7 w-4/6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button><button className="btn btn-error mr-8 text-white">Discover More</button></button>
                    <button className="btn btn-outline btn-error text-white">Latest Project</button>
                </div>
            </div>             
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;