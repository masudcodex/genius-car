import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
import './About.css';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-80 h-80 rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute w-1/2 h-3/4 top-1/2 right-20 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h5 className='text-xl font-bold text-red-500 mb-3'>About Us</h5>
                    <h1 className="text-5xl font-bold w-4/5 leading-tight">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    <br /> 
                    <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;