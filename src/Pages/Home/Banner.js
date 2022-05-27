import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero md:min-h-screen" style={{
            backgroundImage: `url(${banner})`
        }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <p className="text-xl md:text-4xl font-bold"><span className='text-accent text-3xl'>Fine Carpenter Tools</span> <br /> Complete furnishing with best quality</p>
                    <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a href="#tools"><button className="btn btn-secondary bg-transparent text-secondary hover:bg-secondary hover:text-black">Get Started</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;