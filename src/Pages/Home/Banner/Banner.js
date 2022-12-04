import React from 'react';
import bannerImage1 from './../../../assets/images/banner/1.jpg';
import bannerImage2 from './../../../assets/images/banner/2.jpg';
import bannerImage3 from './../../../assets/images/banner/3.jpg';
import bannerImage4 from './../../../assets/images/banner/4.jpg';
import bannerImage5 from './../../../assets/images/banner/5.jpg';
import bannerImage6 from './../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';



const Banner = () => {
    const bannerData = [
    {
        image: bannerImage1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: bannerImage2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: bannerImage3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: bannerImage4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: bannerImage5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: bannerImage6,
        prev: 5,
        id: 6,
        next: 1
    }

]
    return (
        <div className="carousel w-full slider-height">       
            {
                bannerData.map(slide=> <BannerItem key={slide.id} slide={slide}></BannerItem>)
            }                  
        </div>
    );
};

export default Banner;